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
      const response = await axios.get("https://quest-search-backend.onrender.com/api/questions", {
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
