import React, { useState, useEffect } from "react";

// Dummy data (replace later with backend API call)
const studyMaterials = [
  {
    id: 1,
    type: "Notes",
    title: "Complete Physics Notes - Class 12",
    grade: "Class 12",
    subject: "Physics",
    downloads: 1234,
    rating: 4.8,
    author: "Physics Master",
    date: "2024-01-15",
    trending: true,
  },
  {
    id: 2,
    type: "Question Bank",
    title: "SEE Mathematics Question Bank",
    grade: "SEE",
    subject: "Mathematics",
    downloads: 987,
    rating: 4.6,
    author: "Math Guru",
    date: "2024-01-12",
    trending: true,
  },
  {
    id: 3,
    type: "Lab Manual",
    title: "Chemistry Lab Manual - Grade 11",
    grade: "Class 11",
    subject: "Chemistry",
    downloads: 654,
    rating: 4.5,
    author: "Chem Expert",
    date: "2024-01-10",
    trending: false,
  },
  {
    id: 4,
    type: "Guide",
    title: "English Grammar Guide - SEE",
    grade: "SEE",
    subject: "English",
    downloads: 543,
    rating: 4.7,
    author: "English Pro",
    date: "2024-01-08",
    trending: false,
  },
  {
    id: 5,
    type: "Notes",
    title: "Business Studies Notes - Class 12",
    grade: "Class 12",
    subject: "Business Studies",
    downloads: 432,
    rating: 4.4,
    author: "Business Buddy",
    date: "2024-01-05",
    trending: false,
  },
  {
    id: 6,
    type: "Diagrams",
    title: "Biology Diagrams Collection - Class 11",
    grade: "Class 11",
    subject: "Biology",
    downloads: 321,
    rating: 4.9,
    author: "Bio Visual",
    date: "2024-01-03",
    trending: false,
  },
];

const grades = ["SEE", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"];
const subjects = ["All Subjects", "Physics", "Chemistry", "Mathematics", "Biology", "English", "Business Studies"];

const NotesPage = () => {
  const [search, setSearch] = useState("");
  const [gradeFilter, setGradeFilter] = useState("All Grades");
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");

  const filteredMaterials = studyMaterials.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesGrade = gradeFilter === "All Grades" || item.grade === gradeFilter;
    const matchesSubject = subjectFilter === "All Subjects" || item.subject === subjectFilter;
    return matchesSearch && matchesGrade && matchesSubject;
  });

  const trending = filteredMaterials.filter((item) => item.trending);

  return (
    <div  id= "Notes" className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Study Notes & Materials</h1>
        <p className="text-gray-600 mt-2">
          Access thousands of study materials shared by students across Nepal. Find notes,
          question banks, and guides for SEE and +2 levels.
        </p>
      </div>

      {/* Trending Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="mr-2">🔥</span> Trending This Week
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {trending.map((item) => (
            <div key={item.id} className="border rounded-lg shadow-sm p-5 hover:shadow-md transition">
              <div className="flex justify-between items-center mb-2">
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">{item.type}</span>
                <span className="px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded">Trending</span>
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.grade} • {item.subject}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-600">⬇ {item.downloads} • ⭐ {item.rating}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search notes, subjects, or topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:flex-1 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={gradeFilter}
          onChange={(e) => setGradeFilter(e.target.value)}
          className="border rounded-md px-4 py-2"
        >
          <option>All Grades</option>
          {grades.map((grade) => (
            <option key={grade}>{grade}</option>
          ))}
        </select>
        <select
          value={subjectFilter}
          onChange={(e) => setSubjectFilter(e.target.value)}
          className="border rounded-md px-4 py-2"
        >
          {subjects.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
      </div>

      {/* All Study Materials */}
      <div>
        <h2 className="text-xl font-semibold mb-4">All Study Materials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {filteredMaterials.map((item) => (
            <div key={item.id} className="border rounded-lg shadow-sm p-5 hover:shadow-md transition">
              <div className="flex justify-between items-center mb-2">
                <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">{item.type}</span>
                <span className="text-sm text-gray-400">{item.date}</span>
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.grade} • {item.subject}</p>
              <p className="text-sm text-gray-500 mt-1">By {item.author}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-600">⬇ {item.downloads} • ⭐ {item.rating}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
