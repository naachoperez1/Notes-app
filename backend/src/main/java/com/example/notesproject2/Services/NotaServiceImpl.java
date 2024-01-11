package com.example.notesproject2.Services;

import com.example.notesproject2.Entities.Nota;
import com.example.notesproject2.Repositories.NotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotaServiceImpl implements NotaService {
    @Autowired
    private NotaRepository repository;

    @Override
    public List<Nota> listAll() {
        return repository.findAll();
    }


    public List<Nota> listAllArchived() {
        return repository.findAllByActiveFalse();
    }

    @Override
    public Nota create(Nota nota) {
        return repository.save(nota);
    }

    @Override
    public Nota getByID(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public Nota update(Nota nota) {
        return repository.save(nota);
    }

    @Override
    public void deleteByID(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        repository.deleteAll();
    }


}
