import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentProfile from "@/components/StudentProfile";
import AcademicStats from "@/components/AcademicStats";
import BonusSystem from "@/components/BonusSystem";
import FreeLunchSystem from "@/components/FreeLunchSystem";
import ScheduleView from "@/components/ScheduleView";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Электронный дневник
          </h1>
          <p className="text-gray-600">
            Добро пожаловать в современную систему образования
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-1">
            <StudentProfile />
          </div>
          <div className="lg:col-span-3">
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="dashboard">📊 Дашборд</TabsTrigger>
                <TabsTrigger value="bonus">🎯 Бонусы</TabsTrigger>
                <TabsTrigger value="lunch">🍽️ Питание</TabsTrigger>
                <TabsTrigger value="schedule">📅 Расписание</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="space-y-6">
                <AcademicStats />
              </TabsContent>

              <TabsContent value="bonus" className="space-y-6">
                <BonusSystem />
              </TabsContent>

              <TabsContent value="lunch" className="space-y-6">
                <FreeLunchSystem />
              </TabsContent>

              <TabsContent value="schedule" className="space-y-6">
                <ScheduleView />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
