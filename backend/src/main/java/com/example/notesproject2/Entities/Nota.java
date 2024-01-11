package com.example.notesproject2.Entities;

import jakarta.persistence.*;

@Entity
@Table(name = "notes")
public class Nota {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String titulo;
    private String texto;
    private Boolean active; 

    public Nota(String titulo, String texto) {
        this.titulo = titulo;
        this.texto = texto;
        this.active = true;
    }

    public Nota() {
        this.active = true;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }


    @Override
    public String toString() {
        return "Note{" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", texto='" + texto + '\'' +
                ", active=" + active +
                '}';
    }
}
