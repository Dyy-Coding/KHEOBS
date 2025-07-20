import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Mail, Twitter } from 'lucide-react';
import teamData from './teamData';

type ContactInfo = {
  facebook?: string;
  linkedin?: string;
  email?: string;
  twitter?: string;
};

type TeamMember = {
  name: string;
  role: string;
  group: string;
  image: string;
  bio: string;
  experience: string;
  description: string;
  contacts?: ContactInfo;
};

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // teamData is already grouped by category, so keep it grouped on main page
  const groups = Object.entries(teamData); // [ [groupName, members[]], ...]

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Meet Our Team
        </h2>

        {/* Render each group with heading and grid */}
        {groups.map(([groupName, members]) => (
          <div key={groupName} className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 border-b border-orange-500 inline-block pb-2">
              {groupName}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {members.map((member, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white shadow-xl rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedMember({ ...member, group: groupName })}
                >
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                    <p className="text-sm text-orange-600">{groupName}</p>
                    <div className="flex gap-3 mt-4">
                      {member.contacts?.facebook && (
                        <a
                          href={member.contacts.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                          aria-label="Facebook"
                        >
                          <Facebook size={18} />
                        </a>
                      )}
                      {member.contacts?.linkedin && (
                        <a
                          href={member.contacts.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={18} />
                        </a>
                      )}
                      {member.contacts?.email && (
                        <a
                          href={`mailto:${member.contacts.email}`}
                          className="text-blue-600 hover:text-blue-800"
                          aria-label="Email"
                        >
                          <Mail size={18} />
                        </a>
                      )}
                      {member.contacts?.twitter && (
                        <a
                          href={member.contacts.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                          aria-label="Twitter"
                        >
                          <Twitter size={18} />
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-lg w-[80vw] h-[80vh] max-w-none p-8 relative overflow-auto flex flex-col md:flex-row gap-8">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Larger image */}
              <div className="flex-shrink-0 mx-auto md:mx-0 md:w-[180px] md:h-[180px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-4xl font-semibold">{selectedMember.name}</h3>
                <p className="text-xl text-gray-700 mt-1">{selectedMember.role}</p>
                <p className="text-orange-600 font-semibold mt-1">{selectedMember.group}</p>

                <div className="mt-6 space-y-6 text-gray-700 flex-grow overflow-auto">
                  <section>
                    <h4 className="font-semibold text-2xl mb-2">Biography</h4>
                    <p>{selectedMember.bio}</p>
                  </section>

                  <section>
                    <h4 className="font-semibold text-2xl mb-2">Experience</h4>
                    <p>{selectedMember.experience}</p>
                  </section>

                  <section>
                    <h4 className="font-semibold text-2xl mb-2">Description</h4>
                    <p>{selectedMember.description}</p>
                  </section>
                </div>

                {/* Contacts */}
                <div className="mt-6 flex gap-6">
                  {selectedMember.contacts?.facebook && (
                    <a
                      href={selectedMember.contacts.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                      aria-label="Facebook"
                    >
                      <Facebook size={28} />
                    </a>
                  )}
                  {selectedMember.contacts?.linkedin && (
                    <a
                      href={selectedMember.contacts.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={28} />
                    </a>
                  )}
                  {selectedMember.contacts?.email && (
                    <a
                      href={`mailto:${selectedMember.contacts.email}`}
                      className="text-blue-600 hover:text-blue-800"
                      aria-label="Email"
                    >
                      <Mail size={28} />
                    </a>
                  )}
                  {selectedMember.contacts?.twitter && (
                    <a
                      href={selectedMember.contacts.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                      aria-label="Twitter"
                    >
                      <Twitter size={28} />
                    </a>
                  )}
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
