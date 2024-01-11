package com.example.notesproject2;

import com.example.notesproject2.Entities.Nota;
import com.example.notesproject2.Repositories.NotaRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class NotesProject2Application {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(NotesProject2Application.class, args);
//        Nota note1 = new Nota("NOTA 1", "hola esta es la nota1");
//        Nota note2 = new Nota("NOTA 2", "hola esta es la segunda nota);
//
//        NotaRepository repository = context.getBean(NotaRepository.class);
//
//        repository.save(note1);
//        repository.save(note2);
    }

}
