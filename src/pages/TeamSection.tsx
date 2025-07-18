import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Mail, X } from 'lucide-react';
import teamData from './teamData';

type ContactInfo = {
  facebook?: string;
  linkedin?: string;
  email?: string;
};

type TeamMember = {
  name: string;
  role: string;
  group: string;
  image: string;
  bio: string;
  experience: string;
  nationality: string;
  description: string;
  contacts?: ContactInfo;
};

type TeamData = {
  [group: string]: TeamMember[];
};

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated researchers and professionals driving our mission forward.
          </p>
        </motion.div>

        {Object.entries(teamData as TeamData).map(([group, members]) => (
          <div key={group} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">{group}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedMember(member)}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="aspect-square bg-gray-200 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-800 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                    <div className="flex gap-3 mt-4">
                      {member.contacts?.facebook && (
                        <a href={member.contacts.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                          <Facebook size={18} />
                        </a>
                      )}
                      {member.contacts?.linkedin && (
                        <a href={member.contacts.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                          <Linkedin size={18} />
                        </a>
                      )}
                      {member.contacts?.email && (
                        <a href={`mailto:${member.contacts.email}`} className="text-blue-600 hover:text-blue-800">
                          <Mail size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Modal */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-xl w-full relative p-6">
              <button onClick={() => setSelectedMember(null)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
                <X size={20} />
              </button>
              <div className="flex flex-col md:flex-row gap-6">
                <img src={selectedMember.image} alt={selectedMember.name} className="w-40 h-40 rounded-lg object-cover" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedMember.name}</h3>
                  <p className="text-blue-800 font-semibold">{selectedMember.role}</p>
                  <p className="mt-2 text-gray-700 text-sm leading-relaxed">{selectedMember.description}</p>
                  <p className="mt-2 text-gray-600 text-sm"><strong>Experience:</strong> {selectedMember.experience}</p>
                  <p className="text-gray-600 text-sm"><strong>Nationality:</strong> {selectedMember.nationality}</p>
                  <div className="flex gap-3 mt-4">
                    {selectedMember.contacts?.facebook && (
                      <a href={selectedMember.contacts.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <Facebook size={18} />
                      </a>
                    )}
                    {selectedMember.contacts?.linkedin && (
                      <a href={selectedMember.contacts.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <Linkedin size={18} />
                      </a>
                    )}
                    {selectedMember.contacts?.email && (
                      <a href={`mailto:${selectedMember.contacts.email}`} className="text-blue-600 hover:text-blue-800">
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
