package com.example.notesproject2.Repositories;

import com.example.notesproject2.Entities.Nota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotaRepository extends JpaRepository<Nota, Long> {
    // Metodo para recuperar las notas que no estan activas (archivadas).
    List<Nota> findAllByActiveFalse();
}
