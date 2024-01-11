package com.example.notesproject2.Services;

import com.example.notesproject2.Entities.Nota;

import java.util.List;

public interface NotaService {
    public List<Nota> listAll();
    public Nota create (Nota nota);
    public Nota getByID (Long id);
    public Nota update (Nota nota);
    public void deleteByID (Long id);

    public void deleteAll();
}
