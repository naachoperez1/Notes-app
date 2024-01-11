package com.example.notesproject2.Controllers;

import com.example.notesproject2.Entities.Nota;
import com.example.notesproject2.Services.NotaServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class NoteController {
    @Autowired
    private NotaServiceImpl service;

    @GetMapping("/notas")
    public List<Nota> getAllNotes () {
        return service.listAll();
    }

    @GetMapping("/notas/arch")
    public List<Nota> getAllArchivedNotes () {
        return service.listAllArchived();
    }

    @GetMapping("notas/{id}")
    public Nota getById (@PathVariable Long id){
        return service.getByID(id);
    }

    @PostMapping("/notas")
    public Nota saveNote (@RequestBody Nota nota){
        return service.create(nota);
    }

    @PutMapping("/notas")
    public Nota updateNote (@RequestBody Nota nota){
        return service.update(nota);
    }

    @DeleteMapping("/notas")
    public void deleteAll (){
        service.deleteAll();
    }

    @DeleteMapping("/notas/{id}")
    public void deleteById (@PathVariable Long id){
        service.deleteByID(id);
    }

}
