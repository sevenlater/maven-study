package admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "")
public class AppController {


    @RequestMapping(value = "/centre")
    public String centre() {
        return "centre";
    }

    @RequestMapping(value = "/login")
    public String login() {
        return "login";
    }
}
