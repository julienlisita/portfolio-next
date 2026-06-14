// src/screens/NotFoundScreen.jsx

import PageTitle from "../components/UI/PageTitle";

export default function NotFoundScreen() {
    return (
      <>
        <PageTitle>404 - Page Non Trouvée</PageTitle>
        <p className="text-lg text-gray-200 mt-4">Désolé, la page que vous cherchez n'existe pas.</p>
        <a href="/" className="text-blue-600 underline mt-4 block">Retour à la page d'accueil</a>
      </>
    );
  }
