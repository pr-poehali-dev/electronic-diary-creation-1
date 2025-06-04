import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const AuthHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (selectedRole && studentId && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedRole("");
    setStudentId("");
    setPassword("");
  };

  if (isLoggedIn) {
    return (
      <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-800">Иванов И.И.</h2>
                  <Badge variant="secondary" className="text-xs">
                    {selectedRole === "student" && "Студент"}
                    {selectedRole === "teacher" && "Преподаватель"}
                    {selectedRole === "parent" && "Родитель"}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Badge variant="outline" className="hidden sm:inline-flex">
                ID: {studentId}
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="gap-2"
              >
                <Icon name="LogOut" size={16} />
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="text-center">
              <CardTitle className="text-white flex items-center justify-center gap-3">
                <Icon name="Shield" size={24} />
                Вход в систему
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role" className="text-white/90">
                  Выберите роль
                </Label>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Кто вы?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">👨‍🎓 Студент</SelectItem>
                    <SelectItem value="teacher">👩‍🏫 Преподаватель</SelectItem>
                    <SelectItem value="parent">👨‍👩‍👧‍👦 Родитель</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="studentId" className="text-white/90">
                  Номер зачётной книжки
                </Label>
                <Input
                  id="studentId"
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="Введите номер"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white/90">
                  Пароль
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Введите пароль"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              <div className="space-y-3 pt-2">
                <Button
                  onClick={handleLogin}
                  className="w-full bg-white text-blue-600 hover:bg-white/90"
                  disabled={!selectedRole || !studentId || !password}
                >
                  <Icon name="LogIn" size={16} className="mr-2" />
                  Войти
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10"
                  disabled
                >
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Госуслуги (временно недоступно)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
