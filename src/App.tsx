import React from "react";

function App() {
  return (
    <div className="font-['Inter',sans-serif] bg-[#f5f7fb] text-[#234]">
      {/* Header/NavBar */}
      <header className="bg-[#363958] text-white px-6 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2">
          <img src="https://ext.same-assets.com/3838754906/2563901416.svg" alt="Rentacar Logo" className="h-10" />
          <span className="text-xl font-bold ml-2 tracking-wide">RENT<span className="text-[#ff6782]">O</span>ALT</span>
        </div>
        <nav className="hidden md:flex gap-7 font-medium text-base">
          <a href="/agences" className="hover:text-[#ff6782] transition">Agences</a>
          <a href="/vehicules" className="hover:text-[#ff6782] transition">Véhicules</a>
          <a href="/services" className="hover:text-[#ff6782] transition">Services</a>
          <a href="/espace-pro" className="hover:text-[#ff6782] transition">Espace Pro</a>
          <a href="/aide" className="hover:text-[#ff6782] transition">Aide</a>
        </nav>
        <button className="bg-[#ff6782] px-5 py-2 rounded-lg font-semibold shadow hover:bg-[#db4661] transition hidden md:block">Se connecter</button>
      </header>

      {/* Hero/Booking Section */}
      <section className="bg-gradient-to-b from-[#363958] to-[#5386e4] text-white py-10 px-4 relative flex flex-col items-center">
        <div className="w-full max-w-3xl rounded-xl bg-white/20 backdrop-blur p-6 md:p-10 mt-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">LOCATION DE VOITURES ET D'UTILITAIRES</h1>
          <div className="my-3">
            <div className="inline-block px-3 py-1 bg-[#ffe8ec] text-[#c44858] rounded-full font-medium text-xs uppercase">Nouveau</div>
            <span className="ml-4 text-base text-[#f2e9ee]">Location de vélos électriques à Paris, Strasbourg et Tours</span>
          </div>
          <div className="mt-6 flex gap-2 md:gap-6 text-sm md:text-base text-[#363958] bg-white rounded-lg shadow p-4 md:p-6 items-center">
            <button className="font-bold bg-[#b4ecec] px-4 py-2 rounded-lg mr-2 text-[#14424b] shadow">Voitures</button>
            <button className="bg-[#e3e6ed] px-4 py-2 rounded-lg text-[#48516d]">Utilitaires</button>
            <button className="bg-[#e3e6ed] px-4 py-2 rounded-lg text-[#48516d]">Sans permis</button>
          </div>
          <div className="mt-4 flex items-center">
            <input id="diffagency" type="checkbox" className="accent-[#5386e4] mr-2" />
            <label htmlFor="diffagency">Restituer le véhicule dans une agence différente</label>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-3 text-[#234]">
            <input className="flex-1 rounded border border-[#cfe0fa] px-3 py-2" placeholder="Départ - lieu ou agence..." />
            <input className="flex-1 rounded border border-[#cfe0fa] px-3 py-2" type="date" />
            <input className="flex-1 rounded border border-[#cfe0fa] px-3 py-2" type="date" />
            <button className="bg-[#ff6782] px-5 py-2 rounded font-bold shadow-lg hover:bg-[#db4661] text-white">Rechercher</button>
          </div>
        </div>
      </section>

      {/* Main services section */}
      <main className="relative z-10 w-full px-4 py-12 md:py-16 bg-[#f5f7fb]">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#363958] mb-10">Nos services de location</h2>
        <section className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="rounded-lg shadow bg-white overflow-hidden p-5 flex flex-col gap-2 border-t-4 border-[#ff6782]">
              <span className="text-xs uppercase text-[#00b28e] font-bold">Partenariat</span>
              <img src="https://rac-production-strapi-uploads.s3.eu-west-3.amazonaws.com/Sans_titre_0aba392092.png" alt="Solidaire" className="object-cover w-full h-28 md:h-32 rounded mb-2" />
              <span className="font-bold text-lg">Engagement Solidaire</span>
              <span className="text-[#606080]">Rent A Car s'engage auprès de l'association Un Rien C'est Tout. Donner 1€ et faire avancer vraiment une cause !</span>
              <button className="self-end text-[#5386e4] font-medium mt-2">Découvrir</button>
            </div>
            <div className="rounded-lg shadow bg-white overflow-hidden p-5 flex flex-col gap-2 border-t-4 border-[#45accf]">
              <span className="text-xs uppercase text-[#00b28e] font-bold">Service Particulier</span>
              <img src="https://rac-production-strapi-uploads.s3.eu-west-3.amazonaws.com/Banniere_Corse_2_99286daed1.png" alt="Corse" className="object-cover w-full h-28 md:h-32 rounded mb-2" />
              <span className="font-bold text-lg">Louer en Corse</span>
              <span className="text-[#606080]">Réservez dès maintenant au meilleur prix pour vos vacances en Corse : Ajaccio, Bastia, Calvi, Figari</span>
              <button className="self-end text-[#5386e4] font-medium mt-2">Je réserve</button>
            </div>
            <div className="rounded-lg shadow bg-white overflow-hidden p-5 flex flex-col gap-2 border-t-4 border-[#ff6782]">
              <span className="text-xs uppercase text-[#45accf] font-bold">Service Particulier</span>
              <img src="https://rac-production-strapi-uploads.s3.eu-west-3.amazonaws.com/Sicily_By_Car_Home_86b28afc7e.png" alt="Italie" className="object-cover w-full h-28 md:h-32 rounded mb-2" />
              <span className="font-bold text-lg">Louer en Italie</span>
              <span className="text-[#606080]">Louez votre voiture dans les principales villes italiennes. Recherchez & réservez dès maintenant !</span>
              <button className="self-end text-[#5386e4] font-medium mt-2">Réserver</button>
            </div>
            <div className="rounded-lg shadow bg-white overflow-hidden p-5 flex flex-col gap-2 border-t-4 border-[#45accf]">
              <span className="text-xs uppercase text-[#ff6782] font-bold">Partenariat</span>
              <img src="https://rac-production-strapi-uploads.s3.eu-west-3.amazonaws.com/Encart_home_page_rentacar_b375c714c8.png" alt="Merci" className="object-cover w-full h-28 md:h-32 rounded mb-2" />
              <span className="font-bold text-lg">Merci à nos clients</span>
              <span className="text-[#606080]">Rent A Car, élu Service Client de l'Année 2025*. Merci à nos équipes pour leur engagement et à nos clients pour leur confiance.</span>
              <button className="self-end text-[#ff6782] font-medium mt-2">Merci !</button>
            </div>
        </section>

        {/* Agencies + Car categories section */}
        <section className="mt-20">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-[#363958]">Nos agences Rent A Car partout en France</h3>
          <div className="flex flex-col md:flex-row items-center gap-7 max-w-5xl mx-auto bg-white/70 shadow rounded-lg p-6 mb-10">
            <img src="https://rac-production-strapi-uploads.s3.eu-west-3.amazonaws.com/map_c298d876fa.png" alt="Carte agences Rent a Car" className="h-32 md:h-44 w-auto drop-shadow" />
            <div>
              <span className="block font-bold text-3xl mb-2 text-[#363958]">488 <span className="text-base font-normal">agences en France et DOM-TOM</span></span>
              <p className="text-[#606080] max-w-xs">Depuis 1996, Rent A Car a su développer dans toute la France un réseau d'experts qualifiés pour répondre à la demande des clients.</p>
              <button className="mt-4 bg-[#45accf] text-white px-6 py-2 font-bold rounded transition hover:bg-[#234]">Trouvez votre agence</button>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-[#363958]">Notre gamme de voitures et d'utilitaires</h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center text-[#234]">
            <div className="flex-1 bg-white rounded shadow p-6 flex flex-col items-center border-t-2 border-[#45accf]">
              <img src="https://rac-production-strapi-uploads.s3.eu-west-3.amazonaws.com/1_c7bf10659b.png" alt="Voitures" className="h-16 mb-4" />
              <span className="font-bold text-lg mb-2">Voitures</span>
              <span className="mb-4 text-center text-[#606080]">Nos types de Voitures<br />Économique, Citadine, Affaires...</span>
              <button className="bg-[#45accf] hover:bg-[#234] text-white px-4 py-2 rounded">Voir nos voitures</button>
            </div>
            <div className="flex-1 bg-white rounded shadow p-6 flex flex-col items-center border-t-2 border-[#5386e4]">
              <img src="https://rac-production-strapi-uploads.s3.eu-west-3.amazonaws.com/3_08_08_22_364f3e3e10.png" alt="Utilitaires" className="h-16 mb-4" />
              <span className="font-bold text-lg mb-2">Utilitaires</span>
              <span className="mb-4 text-center text-[#606080]">Nos types d'Utilitaires<br />Camionnette, Fourgon, Camion...</span>
              <button className="bg-[#5386e4] hover:bg-[#234] text-white px-4 py-2 rounded">Voir nos utilitaires</button>
            </div>
            <div className="flex-1 bg-white rounded shadow p-6 flex flex-col items-center border-t-2 border-[#ff6782]">
              <img src="https://rac-production-strapi-uploads.s3.eu-west-3.amazonaws.com/SPB_ff361b3afc.png" alt="Sans permis" className="h-16 mb-4" />
              <span className="font-bold text-lg mb-2">Sans Permis</span>
              <span className="mb-4 text-center text-[#606080]">Nos types de Sans permis<br />Économique, Premium, Electrique...</span>
              <button className="bg-[#ff6782] hover:bg-[#c23345] text-white px-4 py-2 rounded">Voir nos sans permis</button>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mt-20">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-[#363958]">Vos avis nous inspirent</h3>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white shadow rounded-lg p-6 min-w-[270px] max-w-[350px] flex-1">
              <div className="flex items-center gap-2 text-[#45accf] mb-1">
                <svg width="20" height="20" fill="currentColor" className="inline"><polygon points="10,1 12,7 19,7 13,11 15,18 10,14 5,18 7,11 1,7 8,7" /></svg>
                <span className="text-lg font-bold">4.7</span>
              </div>
              <p className="italic text-[#555] mb-2">"Personnel agréable et professionnel. Très bonne expérience avec l'agence des Ulis."</p>
              <div className="text-xs text-[#828385] mb-1">THIBAULT R. (15/04/2025)</div>
              <div className="text-xs text-[#bbb]">Les Ulis</div>
            </div>
            <div className="bg-white shadow rounded-lg p-6 min-w-[270px] max-w-[350px] flex-1">
              <div className="flex items-center gap-2 text-[#45accf] mb-1">
                <svg width="20" height="20" fill="currentColor" className="inline"><polygon points="10,1 12,7 19,7 13,11 15,18 10,14 5,18 7,11 1,7 8,7" /></svg>
                <span className="text-lg font-bold">4.9</span>
              </div>
              <p className="italic text-[#555] mb-2">"Toujours un plaisir, des véhicules propres en très bon état. Le personnel rien à dire, souriant, agréable, toujours un plaisir de louer chez eux."</p>
              <div className="text-xs text-[#828385] mb-1">LUDOVIC B. (15/04/2025)</div>
              <div className="text-xs text-[#bbb]">Montpellier Sud</div>
            </div>
            <div className="bg-white shadow rounded-lg p-6 min-w-[270px] max-w-[350px] flex-1">
              <div className="flex items-center gap-2 text-[#45accf] mb-1">
                <svg width="20" height="20" fill="currentColor" className="inline"><polygon points="10,1 12,7 19,7 13,11 15,18 10,14 5,18 7,11 1,7 8,7" /></svg>
                <span className="text-lg font-bold">5.0</span>
              </div>
              <p className="italic text-[#555] mb-2">"Super service comme d'habitude sur l'agence de Tours Nord. Merci Julien pour le tarif et ses compétences ;-)"</p>
              <div className="text-xs text-[#828385] mb-1">DANIEL F. (15/04/2025)</div>
              <div className="text-xs text-[#bbb]">Tours Nord</div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mt-20 max-w-5xl mx-auto mb-16 px-2">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-[#363958]">Vous souhaitez en savoir plus sur Rent O Alt ?</h3>
          <div className="grid md:grid-cols-2 gap-10 text-[#363958] mb-8">
            <div>
              <h4 className="font-bold mb-2">Vous souhaitez vous déplacer librement, en vacances ou au quotidien ?</h4>
              <p className="mb-2 text-[#606080]">Rent O Alt est un acteur incontournable de la location voiture et location utilitaire. Déménagement, déplacement professionnel, départ en vacances, location occasionnelle.... Rent O Alt propose depuis 1996 des solutions clés en main et des offres de location de voiture de courte durée pour les particuliers aux meilleurs prix, en s'appuyant sur un réseau de plusieurs centaines d'agences en France. Loueur de proximité, Rent O Alt vous fait bénéficier d'un réseau de plus de 480 agences en France métropolitaine.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Rent O Alt vous propose un service de réservation de véhicule en ligne.</h4>
              <p className="mb-2 text-[#606080]">Vous trouverez sur cette plateforme un large choix de véhicules de tourisme ou utilitaires pour satisfaire tous vos besoins de mobilité. En quelques minutes, trouvez la bonne agence, près d'un aéroport ou en centre-ville, à côté de chez vous ou idéalement située sur votre lieu de vacances. Nous disposons d'une large gamme de véhicules climatisés avec boîte manuelle ou automatique, essence ou diesel : citadines, berlines, monospaces, crossovers ou minibus. Louez à des tarifs imbattables une familiale ou privilégiez le confort et la qualité de véhicules haut de gamme.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Rent O Alt, la référence en location voiture et location utilitaire.</h4>
              <p className="mb-2 text-[#606080]">Nous vous offrons le meilleur de la location voiture. Pour nous, elle doit être synonyme de plaisir, que vous décidiez de louer un véhicule pour vos loisirs ou que vous en ayez besoin pour vos déplacements au quotidien à Lyon, Paris, Nancy ou Marseille ! Nos agences possèdent des flottes récentes, composées des marques les plus populaires : Renault, Peugeot, Citroën, Toyota, Volkswagen, BMW, Audi, Mercedes.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Rent O Alt au service des professionnels</h4>
              <p className="mb-2 text-[#606080]">Rent O Alt accompagne aussi les professionnels avec des solutions de location longue durée, idéales pour les chauffeurs indépendants et les VTC. Pour les conducteurs non titulaires du permis B, nous proposons aussi un réseau d'agences offrant un service de location de voiture sans permis. Vous pourrez ainsi vous déplacer librement, en ville et sur route, seul, en couple ou en famille.</p>
            </div>
          </div>
          <div className="flex flex-wrap py-4 justify-between items-center gap-8 border-t mt-10">
            <div className="flex flex-col items-center flex-1 min-w-[180px]">
              <svg width="32" height="32" fill="#45accf"><circle cx="16" cy="16" r="15" stroke="#cfe0fa" strokeWidth="2" fill="#f8f9f9" /><text x="7" y="22" fontSize="12" fill="#45accf">100%</text></svg>
              <span className="font-semibold mt-2">Paiement 100% sécurisé</span>
            </div>
            <div className="flex flex-col items-center flex-1 min-w-[180px]">
              <svg width="32" height="32" fill="#45accf"><circle cx="16" cy="16" r="15" stroke="#cfe0fa" strokeWidth="2" fill="#f8f9f9" /><text x="11" y="22" fontSize="12" fill="#45accf">★</text></svg>
              <span className="font-semibold mt-2">Annulation gratuite</span>
            </div>
            <div className="flex flex-col items-center flex-1 min-w-[180px]">
              <svg width="32" height="32" fill="#45accf"><circle cx="16" cy="16" r="15" stroke="#cfe0fa" strokeWidth="2" fill="#f8f9f9" /><text x="10" y="22" fontSize="12" fill="#45accf">?</text></svg>
              <span className="font-semibold mt-2">Besoin d'aide ?</span>
            </div>
            <div className="flex flex-col items-center flex-1 min-w-[180px]">
              <svg width="32" height="32" fill="#45accf"><circle cx="16" cy="16" r="15" stroke="#cfe0fa" strokeWidth="2" fill="#f8f9f9" /><text x="7" y="22" fontSize="12" fill="#45accf">✔</text></svg>
              <span className="font-semibold mt-2">Nos engagements</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#363958] text-[#e6e8f0] py-6 text-xs mt-0">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 mb-4">
          <div>
            <div className="font-bold mb-2">L'entreprise Rent O Alt</div>
            <ul className="space-y-1">
              <li>Nous connaître</li>
              <li>Nous rejoindre</li>
              <li>Le groupe</li>
              <li>Espace presse</li>
              <li>Développement durable</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Partenaires</div>
            <ul className="space-y-1">
              <li>LNB</li>
              <li>Un Rien C'est Tout</li>
              <li>Centre Pompidou</li>
              <li>France Stage Permis</li>
              <li>Hôtel Marseille</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Liens Populaires</div>
            <ul className="space-y-1">
              <li>Location voiture Lyon</li>
              <li>Location voiture Marseille</li>
              <li>Location voiture Bordeaux</li>
              <li>Location voiture Nice</li>
              <li>Location voiture Toulouse</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#45accf] max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-2 items-center justify-between pt-4">
          <div className="flex gap-5">
            <a href="/mentions-legales" className="hover:underline">Mentions légales</a>
            <a href="/conditions-generales" className="hover:underline">Conditions générales</a>
            <a href="/cgu" className="hover:underline">CGU</a>
            <a href="/cookies" className="hover:underline">Cookies</a>
          </div>
          <div className="flex gap-2">
            <a href="https://instagram.com" aria-label="Instagram"><svg width="18" height="18" fill="#e6e8f0"><circle cx="9" cy="9" r="8" stroke="#45accf" strokeWidth="2" fill="none"/></svg></a>
            <a href="https://facebook.com" aria-label="Facebook"><svg width="18" height="18" fill="#e6e8f0"><circle cx="9" cy="9" r="8" stroke="#45accf" strokeWidth="2" fill="none"/></svg></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><svg width="18" height="18" fill="#e6e8f0"><circle cx="9" cy="9" r="8" stroke="#45accf" strokeWidth="2" fill="none"/></svg></a>
            <a href="https://twitter.com" aria-label="Twitter"><svg width="18" height="18" fill="#e6e8f0"><circle cx="9" cy="9" r="8" stroke="#45accf" strokeWidth="2" fill="none"/></svg></a>
          </div>
          <div className="mt-2 md:mt-0">&copy; {(new Date()).getFullYear()} RENT O ALT. Tous droits réservés.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
