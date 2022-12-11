package ru.kata.spring.boot_security.demo.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import ru.kata.spring.boot_security.demo.model.User;

import java.util.List;

public interface UserService extends UserDetailsService {
    User findUserById(Long id);
    List<User> getAllUsers();

    void saveUser(User user);

    void removeUser(long id);

    User getByUsername(String username);
}
