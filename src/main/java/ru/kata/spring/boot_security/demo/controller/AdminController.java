package ru.kata.spring.boot_security.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.security.Principal;
import java.util.List;

@Controller
@RequestMapping("/admin")
public class AdminController {
    private final UserService userService;
    private final RoleService roleService;

    public AdminController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping()
    public String getAllUsers(Model model, Principal principal) {
        User logged = userService.getByUsername(principal.getName());
        List<User> users = userService.getAllUsers();
        model.addAttribute("users", users);
        model.addAttribute("logged", logged);
        model.addAttribute("roles", roleService.getAllRoles());
        return "admin";
    }

//    @PostMapping("/deleteUser")
//    public String updateEmployee(@ModelAttribute("user") User user) {
//        userService.removeUser(user.getId());
//        return "redirect:/admin";
//    }
//
//    @PostMapping("/saveUser")
//    public String saveUser(@ModelAttribute("user") User user, @RequestParam("rolesList") String[] selectedRoles) {
//        userService.saveUser(user, selectedRoles);
//        return "redirect:/admin";
//    }



}
