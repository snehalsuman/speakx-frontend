// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Input } from "../components/ui/input";
// import { Button } from "../components/ui/button";
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
// } from "../components/ui/select";

// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../components/ui/table";

// const SearchWithPagination = () => {
//   interface Question {
//     title: string;
//     type: string;
//   }

//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [limit, setLimit] = useState(5);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchQuestions();
//   }, [page, search, limit]);

//   const fetchQuestions = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:5555/api/questions", {
//         params: { page, limit, search },
//       });
//       console.log(response.data);
//       setQuestions(response.data.questions || []);
//       setTotalPages(response.data.total);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//       setLoading(false);
//     }
//   };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value);
//     setPage(1);
//   };

//   const handleLimitChange = (value: any) => {
//     setLimit(Number(value));
//     setPage(1);
//   };

//   const highlightText = (text: string) => {
//     if (!search) return text;

//     const regex = new RegExp(`(${search})`, "gi");
//     const parts = text.split(regex);

//     return parts.map((part, index) =>
//       part.toLowerCase() === search.toLowerCase() ? (
//         <span key={index} className="bg-yellow-200">
//           {part}
//         </span>
//       ) : (
//         part
//       )
//     );
//   };

//   return (
//     <div className="p-4 max-w-2xl mx-auto">
//       <div className="flex items-center gap-4">
//         <Input
//           type="text"
//           placeholder="Search questions..."
//           value={search}
//           onChange={handleSearchChange}
//           className="flex-1"
//         />

//         <Select value={limit.toString()} onValueChange={handleLimitChange}>
//           <SelectTrigger className="w-24">{limit}</SelectTrigger>
//           <SelectContent>
//             <SelectItem value="5">5</SelectItem>
//             <SelectItem value="10">10</SelectItem>
//             <SelectItem value="15">15</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       <Table className="h-[32rem]">
//         <TableCaption>
//           Showing data from Page {questions.length === 0 ? 0 : page} out of{" "}
//           {Math.ceil(totalPages / limit)}
//         </TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="text-left">Title</TableHead>
//             <TableHead className="text-right">Type</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {loading ? (
//             <TableRow>
//               <TableCell colSpan={2}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <CircularProgress />
//                   <span>Loading... Please Wait</span>
//                 </Box>
//               </TableCell>
//             </TableRow>
//           ) : questions.length > 0 ? (
//             questions.map((q, index) => (
//               <TableRow key={index}>
//                 <TableCell className="text-left">
//                   {highlightText(q.title)}
//                 </TableCell>
//                 <TableCell className="text-right">{q.type}</TableCell>
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell colSpan={2}>No questions found.</TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>

//       <div className="flex justify-center mt-4 space-x-2">
//         <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
//           Previous
//         </Button>
//         <span>Page {questions.length === 0 ? 0 : page}</span>
//         <Button
//           disabled={page === Math.ceil(totalPages / limit)}
//           onClick={() => setPage(page + 1)}
//         >
//           Next
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default SearchWithPagination;



// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Input } from "../components/ui/input";
// import { Button } from "../components/ui/button";
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
// } from "../components/ui/select";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../components/ui/table";

// const SearchWithPagination = () => {
//   interface Question {
//     title: string;
//     type: string;
//   }

//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [limit, setLimit] = useState(5);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchQuestions();
//   }, [page, search, limit]);

//   const fetchQuestions = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:5555/api/questions", {
//         params: { page, limit, search },
//       });
//       setQuestions(response.data.questions || []);
//       setTotalPages(response.data.total);
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//     setLoading(false);
//   };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value);
//     setPage(1);
//   };

//   const handleLimitChange = (value: any) => {
//     setLimit(Number(value));
//     setPage(1);
//   };

//   const highlightText = (text: string) => {
//     if (!search) return text;

//     const regex = new RegExp(`(${search})`, "gi");
//     const parts = text.split(regex);

//     return parts.map((part, index) =>
//       part.toLowerCase() === search.toLowerCase() ? (
//         <span key={index} className="bg-yellow-300 font-bold">
//           {part}
//         </span>
//       ) : (
//         part
//       )
//     );
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <Card>
//         <CardHeader>
//           <CardTitle>Search Questions</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="flex items-center gap-4 mb-4">
//             <Input
//               type="text"
//               placeholder="Search questions..."
//               value={search}
//               onChange={handleSearchChange}
//               className="w-full"
//             />

//             <Select value={limit.toString()} onValueChange={handleLimitChange}>
//               <SelectTrigger className="w-28">{limit}</SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="5">5</SelectItem>
//                 <SelectItem value="10">10</SelectItem>
//                 <SelectItem value="15">15</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <Table className="border rounded-md overflow-hidden">
//             <TableCaption>
//               Showing page {questions.length === 0 ? 0 : page} of {Math.ceil(totalPages / limit)}
//             </TableCaption>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="text-left font-medium">Title</TableHead>
//                 <TableHead className="text-right font-medium">Type</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {loading ? (
//                 <TableRow>
//                   <TableCell colSpan={2} className="text-center">
//                     <Box className="flex flex-col items-center">
//                       <CircularProgress />
//                       <span className="mt-2">Loading... Please wait</span>
//                     </Box>
//                   </TableCell>
//                 </TableRow>
//               ) : questions.length > 0 ? (
//                 questions.map((q, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{highlightText(q.title)}</TableCell>
//                     <TableCell className="text-right">{q.type}</TableCell>
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={2} className="text-center">
//                     No questions found.
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>

//           <div className="flex justify-center mt-4 space-x-4">
//             <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
//               Previous
//             </Button>
//             <span className="font-semibold">Page {questions.length === 0 ? 0 : page}</span>
//             <Button disabled={page === Math.ceil(totalPages / limit)} onClick={() => setPage(page + 1)}>
//               Next
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default SearchWithPagination;


import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { Badge } from "../components/ui/badge";

const SearchWithPagination = () => {
  interface Question {
    title: string;
    type: string;
  }

  const [questions, setQuestions] = useState<Question[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(8);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, [page, search, limit]);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5555/api/questions", {
        params: { page, limit, search },
      });
      setQuestions(response.data.questions || []);
      setTotalPages(response.data.total);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
    setLoading(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleLimitChange = (value: any) => {
    setLimit(Number(value));
    setPage(1);
  };

  const highlightText = (text: string) => {
    if (!search) return text;

    const regex = new RegExp(`(${search})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} className="bg-yellow-300 font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>QuestSearch</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <Input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={handleSearchChange}
              className="w-full"
            />

            <Select value={limit.toString()} onValueChange={handleLimitChange}>
              <SelectTrigger className="w-28">{limit}</SelectTrigger>
              <SelectContent>
                <SelectItem value="8">8</SelectItem>
                <SelectItem value="13">13</SelectItem>
                <SelectItem value="19">19</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {loading ? (
            <div className="flex justify-center">
              <Spinner size="sm" className="bg-black dark:bg-white" />
            </div>
          ) : questions.length > 0 ? (
            <div className="space-y-4">
              {questions.map((q, index) => (
                <Card key={index} className="p-4 shadow">
                  <h3 className="font-semibold text-lg">{highlightText(q.title)}</h3>
                  <Badge variant="outline" className="mt-2">{q.type}</Badge>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">No questions found.</div>
          )}

          <div className="flex justify-center mt-6 space-x-4">
            <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
              Previous
            </Button>
            <span className="font-semibold">Page {questions.length === 0 ? 0 : page}</span>
            <Button disabled={page === Math.ceil(totalPages / limit)} onClick={() => setPage(page + 1)}>
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchWithPagination;
