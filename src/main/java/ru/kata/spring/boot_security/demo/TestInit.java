package ru.kata.spring.boot_security.demo;


import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import ru.kata.spring.boot_security.demo.model.Gender;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.repository.RoleRepository;
import ru.kata.spring.boot_security.demo.repository.UserRepository;

import javax.annotation.PostConstruct;
import java.util.Set;

@Component
public class TestInit {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public TestInit(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @PostConstruct
    public void addDefaultUsers() {
        Role roleUser = new Role("ROLE_USER");
        Role roleAdmin = new Role("ROLE_ADMIN");
        Role roleGuest = new Role("ROLE_GUEST");
        roleRepository.save(roleUser);
        roleRepository.save(roleAdmin);
        roleRepository.save(roleGuest);

        User admin = new User(Gender.M, "Oleg", "Kosarev", (byte) 25,
                "admin", new BCryptPasswordEncoder().encode("admin"));
        admin.setRoles(Set.of(roleAdmin,roleUser));

        User user = new User(Gender.F, "Ekaterina", "Kosareva", (byte) 23,
                "user", new BCryptPasswordEncoder().encode("user"));
        user.setRoles(Set.of(roleUser));

        User guest = new User(Gender.M, "Just", "Guest", (byte) 20,
                "guest", new BCryptPasswordEncoder().encode("guest"));
        guest.setRoles(Set.of(roleGuest));

        userRepository.save(admin);
        userRepository.save(user);
        userRepository.save(guest);
    }

}
