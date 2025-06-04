import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const StudentProfile = () => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
            И
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Иванов Иван</h3>
            <p className="text-gray-500 font-medium">3 курс • Группа АК-21</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="font-medium text-gray-600">Статус:</span>
          <Badge className="bg-green-100 text-green-700 border-green-200">
            Активный ученик
          </Badge>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="font-medium text-gray-600">
            Классный руководитель:
          </span>
          <span className="font-semibold text-gray-800">Петрова А.С.</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="font-medium text-gray-600">Учебный год:</span>
          <span className="font-semibold text-gray-800">2024-2025</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentProfile;
