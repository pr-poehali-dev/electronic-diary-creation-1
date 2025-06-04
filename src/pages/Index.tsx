import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentProfile from "@/components/StudentProfile";
import AcademicStats from "@/components/AcademicStats";
import BonusSystem from "@/components/BonusSystem";
import FreeLunchSystem from "@/components/FreeLunchSystem";
import ScheduleView from "@/components/ScheduleView";
import AuthHeader from "@/components/AuthHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <AuthHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Электронный дневник
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Аэрокосмический колледж СибГУ
          </p>
          <p className="text-gray-500">
            Современная цифровая образовательная платформа
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <StudentProfile />
          </div>
          <div className="lg:col-span-3">
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/60 backdrop-blur-sm">
                <TabsTrigger value="dashboard" className="gap-2">
                  📊 Дашборд
                </TabsTrigger>
                <TabsTrigger value="bonus" className="gap-2">
                  🎯 Бонусы
                </TabsTrigger>
                <TabsTrigger value="lunch" className="gap-2">
                  🍽️ Питание
                </TabsTrigger>
                <TabsTrigger value="schedule" className="gap-2">
                  📅 Расписание
                </TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="space-y-6 mt-6">
                <AcademicStats />
              </TabsContent>

              <TabsContent value="bonus" className="space-y-6 mt-6">
                <BonusSystem />
              </TabsContent>

              <TabsContent value="lunch" className="space-y-6 mt-6">
                <FreeLunchSystem />
              </TabsContent>

              <TabsContent value="schedule" className="space-y-6 mt-6">
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
