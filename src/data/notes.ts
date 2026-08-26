export interface Note {
  id: string;
  url: string;
}

/*
  Pour ajouter un lien (post LinkedIn, article, etc.) : ajoute un objet
  ici avec un id unique et l'URL. L'aperçu (titre/image/description)
  est généré automatiquement.
*/
export const notes: Note[] = [
 { id: 'note_1', url: 'https://lnkd.in/p/e7ar43Hg' },
 { id: 'note_2', url: 'https://lnkd.in/p/epZSD6he' },
];