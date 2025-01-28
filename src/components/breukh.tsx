import React from "react";
import { motion } from "framer-motion";

const MissionEquipe: React.FC = () => {
    return (
        <div className="px-8 py-16 bg-gray-100" id="about">
            {/* Section Notre Mission */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start gap-10 mb-16"
            >
                {/* Texte à gauche */}
                <div className="flex-1">
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-gray-800 mb-4"
                    >
                        Notre Mission
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-600 mb-4"
                    >
                        D'après les informations de l'image, leur mission semble être d'accompagner les entreprises,
                        notamment les grands acteurs du CAC 40, dans leur transformation digitale en apportant leur
                        expertise sur des sujets clés comme ECM (Enterprise Content Management), CCM (Customer
                        Communication Management) et Office 365.
                    </motion.p>
                    
                    <motion.p
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-600"
                    >
                        Avec plus de 11 ans d'expérience dans des projets d’envergure, leur équipe de passionnés du
                        digital et de la technologie met à disposition son savoir-faire pour offrir des solutions
                        innovantes et adaptées aux besoins des entreprises.
                    </motion.p>
                </div>

                {/* Cartes à droite */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex-1 flex flex-wrap gap-6"
                >
                    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center w-[45%] border-l-4 border-[#2B79C2]">
                        <h3 className="text-3xl font-bold text-gray-800">+5</h3>
                        <p className="text-gray-600 text-sm text-center">
                            clients parmi de grands acteurs du CAC 40
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center w-[45%] border-r-4 border-[#2B79C2]">
                        <h3 className="text-3xl font-bold text-gray-800">3</h3>
                        <p className="text-gray-600 text-sm text-center">
                            domaines d’expertise sur les sujets ECM, CCM et Office 365
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center w-[45%] border-l-4 border-[#2B79C2]">
                        <h3 className="text-3xl font-bold text-gray-800">11</h3>
                        <p className="text-gray-600 text-sm text-center">
                            années d’expertise sur des projets de grande ampleur
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center w-[45%] border-r-4 border-[#2B79C2]">
                        <h3 className="text-3xl font-bold text-gray-800">+10</h3>
                        <p className="text-gray-600 text-sm text-center">
                            passionnés de digital et de technologie à votre service
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Section Notre Équipe */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-lg shadow-md"
            >
                <motion.h2
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-800 mb-4 text-center"
                >
                    Notre Équipe
                </motion.h2>
                
                <motion.p
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-600 text-center max-w-2xl mx-auto"
                >
                    Une équipe d'experts passionnés par la sécurité numérique et engagés dans la 
                    protection renforcée des données vitales de votre entreprise.
                </motion.p>

                {/* Membres de l'équipe */}
                <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="p-6 bg-gray-50 rounded-lg shadow-md w-[30%]"
                    >
                        <h3 className="text-lg font-semibold text-gray-800">Plipli pluiw</h3>
                        <p className="text-gray-600">Directeur Général</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true }}
                        className="p-6 bg-gray-50 rounded-lg shadow-md w-[30%]"
                    >
                        <h3 className="text-lg font-semibold text-gray-800">Breukh</h3>
                        <p className="text-gray-600">Président</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true }}
                        className="p-6 bg-gray-50 rounded-lg shadow-md w-[30%]"
                    >
                        <h3 className="text-lg font-semibold text-gray-800">Tiokoto bay</h3>
                        <p className="text-gray-600">Responsable Conformité</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default MissionEquipe;
