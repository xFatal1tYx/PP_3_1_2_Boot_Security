package ru.kata.spring.boot_security.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MyRestController {
    private final UserService userService;

    public MyRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public ResponseEntity<User> showCurrentUsers(Principal principal) {
        return new ResponseEntity<>(userService.getByUsername(principal.getName()), HttpStatus.OK);
    }

    @GetMapping("/admin/users")
    public ResponseEntity<List<User>> showAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @PostMapping("/admin/users")
    public ResponseEntity<Void> createUser(@RequestBody User user) {
        userService.saveUser(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/admin/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return new ResponseEntity<>(userService.findUserById(id), HttpStatus.OK);
    }

    @DeleteMapping("/admin/user/{id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable Long id) {
        userService.removeUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
