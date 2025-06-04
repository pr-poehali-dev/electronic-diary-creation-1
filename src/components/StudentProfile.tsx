import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const StudentProfile = () => {
  return (
    <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
            И
          </div>
          <div>
            <h3 className="text-xl font-semibold">Иванов Иван</h3>
            <p className="text-sm text-gray-600">11 "А" класс</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Статус:</span>
          <Badge variant="default">Активный ученик</Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Классный руководитель:</span>
          <span className="text-sm">Петрова А.С.</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Учебный год:</span>
          <span className="text-sm">2024-2025</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentProfile;
