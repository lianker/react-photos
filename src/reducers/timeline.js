import { List } from "immutable";

function trocaFoto(lista, fotoId, callbackAtualizaPropriedades) {
  const fotoEstadoAntigo = lista.find(foto => foto.id === fotoId);
  const novasPropriedades = callbackAtualizaPropriedades(fotoEstadoAntigo);

  const fotoEstadoNovo = Object.assign({}, fotoEstadoAntigo, novasPropriedades);
  const indiceDaLista = lista.findIndex(foto => foto.id === fotoId);
  return lista.set(indiceDaLista, fotoEstadoNovo);
}

export function timeLineReducer(state = new List(), action) {
  if (action.type === "LISTAGEM") {
    return new List(action.fotos);
  } else if (action.type === "COMENTARIO") {
    return trocaFoto(state, action.fotoId, fotoEstadoAntigo => {
      const novosComentarios = fotoEstadoAntigo.comentarios.concat(action.novoComentario);
      return { comentarios: novosComentarios };
    });
  } else if (action.type === "LIKE") {
    return trocaFoto(state, action.fotoId, fotoEstadoAntigo => {
      const liker = action.liker;
      const possivelLiker = fotoEstadoAntigo.likers.find(likerAtual => likerAtual.login === liker.login);

      let novosLikers;
      if (possivelLiker === undefined) {
        novosLikers = fotoEstadoAntigo.likers.concat(liker);
      } else {
        novosLikers = fotoEstadoAntigo.likers.filter(likerAtual => likerAtual.login !== liker.login);
      }

      return { likers: novosLikers, likeada: !fotoEstadoAntigo.likeada };
    });
  }

  return state;
}
