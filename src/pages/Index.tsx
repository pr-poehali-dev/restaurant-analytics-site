import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from 'recharts';

const revenueData = [
  { name: 'Пн', value: 12500 },
  { name: 'Вт', value: 15200 },
  { name: 'Ср', value: 14800 },
  { name: 'Чт', value: 18900 },
  { name: 'Пт', value: 24500 },
  { name: 'Сб', value: 28300 },
  { name: 'Вс', value: 26700 },
];

const ordersData = [
  { name: 'Пн', orders: 45 },
  { name: 'Вт', orders: 52 },
  { name: 'Ср', orders: 49 },
  { name: 'Чт', orders: 63 },
  { name: 'Пт', orders: 78 },
  { name: 'Сб', orders: 89 },
  { name: 'Вс', orders: 85 },
];

const categoryData = [
  { name: 'Завтраки', value: 45200 },
  { name: 'Обеды', value: 78900 },
  { name: 'Ужины', value: 92300 },
  { name: 'Напитки', value: 34500 },
  { name: 'Десерты', value: 28700 },
];

const forecastData = [
  { month: 'Янв', actual: 320000, forecast: 315000 },
  { month: 'Фев', actual: 340000, forecast: 338000 },
  { month: 'Мар', actual: 380000, forecast: 375000 },
  { month: 'Апр', actual: 420000, forecast: 425000 },
  { month: 'Май', actual: 0, forecast: 465000 },
  { month: 'Июн', actual: 0, forecast: 490000 },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <Icon name="ChefHat" size={28} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Restaurant Analytics
                </h1>
                <p className="text-sm text-muted-foreground">Умная аналитика вашего ресторана</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Icon name="Download" size={16} className="mr-2" />
                Экспорт
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </Button>
            </div>
          </div>
        </div>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="container mx-auto px-6 py-6">
        <TabsList className="mb-8 grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="dashboard" className="gap-2">
            <Icon name="LayoutDashboard" size={16} />
            Дашборд
          </TabsTrigger>
          <TabsTrigger value="sales" className="gap-2">
            <Icon name="TrendingUp" size={16} />
            Продажи
          </TabsTrigger>
          <TabsTrigger value="reports" className="gap-2">
            <Icon name="FileText" size={16} />
            Отчёты
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="hover-scale border-l-4 border-l-primary">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Выручка сегодня</CardTitle>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon name="DollarSign" size={20} className="text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">₽26,700</div>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="text-success font-semibold">↑ 12.5%</span> относительно вчера
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-l-4 border-l-secondary">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Заказы</CardTitle>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                  <Icon name="ShoppingCart" size={20} className="text-secondary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">85</div>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="text-success font-semibold">↑ 8.2%</span> относительно вчера
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-l-4 border-l-warning">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Средний чек</CardTitle>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                  <Icon name="Receipt" size={20} className="text-warning" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">₽314</div>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="text-success font-semibold">↑ 3.8%</span> относительно вчера
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-l-4 border-l-accent">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Гости</CardTitle>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Icon name="Users" size={20} className="text-accent" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">142</div>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="text-destructive font-semibold">↓ 2.1%</span> относительно вчера
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="animate-fade-in shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                  Выручка за неделю
                </CardTitle>
                <CardDescription>Динамика продаж по дням недели</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={320}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="name" 
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `₽${(value / 1000).toFixed(0)}k`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                      formatter={(value: number) => [`₽${value.toLocaleString('ru-RU')}`, 'Выручка']}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="animate-fade-in shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="ShoppingCart" size={20} className="text-secondary" />
                  Количество заказов
                </CardTitle>
                <CardDescription>Динамика заказов за неделю</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={320}>
                  <BarChart data={ordersData}>
                    <XAxis 
                      dataKey="name" 
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                      formatter={(value: number) => [value, 'Заказов']}
                    />
                    <Bar 
                      dataKey="orders" 
                      fill="hsl(var(--secondary))" 
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-fade-in shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="PieChart" size={20} className="text-warning" />
                Популярные категории
              </CardTitle>
              <CardDescription>Выручка по категориям меню за текущий месяц</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {categoryData.map((item, index) => {
                  const colors = ['primary', 'secondary', 'warning', 'accent', 'success'];
                  const color = colors[index % colors.length];
                  return (
                    <div key={item.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium flex items-center gap-2">
                          <div className={`h-3 w-3 rounded-full bg-${color}`} />
                          {item.name}
                        </span>
                        <span className="text-base font-bold">
                          ₽{item.value.toLocaleString('ru-RU')}
                        </span>
                      </div>
                      <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className={`h-full bg-${color} transition-all duration-500`}
                          style={{
                            width: `${(item.value / Math.max(...categoryData.map((d) => d.value))) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sales" className="space-y-6 animate-fade-in">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="LineChart" size={20} className="text-primary" />
                Динамика продаж и прогноз
              </CardTitle>
              <CardDescription>Сравнение фактических показателей с прогнозируемыми</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={forecastData}>
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `₽${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                    formatter={(value: number) => [`₽${value.toLocaleString('ru-RU')}`, '']}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    name="Фактическая выручка"
                    dot={{ fill: 'hsl(var(--primary))', r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="forecast"
                    stroke="hsl(var(--warning))"
                    strokeWidth={3}
                    strokeDasharray="8 4"
                    name="Прогноз"
                    dot={{ fill: 'hsl(var(--warning))', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="hover-scale shadow-sm border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Icon name="Target" size={18} className="text-primary" />
                  Прогноз на май
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-3">₽465,000</div>
                <p className="text-sm text-muted-foreground">
                  Ожидаемая выручка по текущим трендам
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale shadow-sm border-l-4 border-l-success">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Icon name="TrendingUp" size={18} className="text-success" />
                  Рост за квартал
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-success mb-3">+31.3%</div>
                <p className="text-sm text-muted-foreground">
                  Увеличение выручки к предыдущему кварталу
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale shadow-sm border-l-4 border-l-warning">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Icon name="Award" size={18} className="text-warning" />
                  Целевой показатель
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-3">₽500,000</div>
                <p className="text-sm text-muted-foreground">
                  До цели осталось <span className="font-semibold text-warning">7%</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6 animate-fade-in">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" size={20} className="text-primary" />
                  Финансовый отчёт
                </CardTitle>
                <CardDescription>Подробная финансовая отчётность за период</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <span className="text-sm font-medium">Общая выручка</span>
                    <span className="font-bold text-lg">₽1,140,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-destructive/5">
                    <span className="text-sm font-medium">Себестоимость</span>
                    <span className="font-bold text-lg text-destructive">-₽456,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-destructive/5">
                    <span className="text-sm font-medium">Операционные расходы</span>
                    <span className="font-bold text-lg text-destructive">-₽285,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-success/10 border-t-2 border-success">
                    <span className="font-semibold text-base">Чистая прибыль</span>
                    <span className="text-2xl font-bold text-success">₽399,000</span>
                  </div>
                </div>
                <Button className="w-full mt-4">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать полный отчёт
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart3" size={20} className="text-success" />
                  Анализ рентабельности
                </CardTitle>
                <CardDescription>Ключевые показатели эффективности</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Маржинальность</span>
                    <span className="font-bold text-success text-lg">35%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full bg-success transition-all duration-500" style={{ width: '35%' }} />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">ROI (рентабельность инвестиций)</span>
                    <span className="font-bold text-primary text-lg">28%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full bg-primary transition-all duration-500" style={{ width: '28%' }} />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Прогноз роста</span>
                    <span className="font-bold text-warning text-lg">42%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full bg-warning transition-all duration-500" style={{ width: '42%' }} />
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Icon name="TrendingUp" size={16} className="mr-2" />
                  Детальный анализ
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calendar" size={20} className="text-primary" />
                Быстрые действия
              </CardTitle>
              <CardDescription>Создание и экспорт отчётов</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-3">
                <Button variant="outline" className="justify-start h-auto py-4">
                  <div className="flex flex-col items-start gap-1 w-full">
                    <div className="flex items-center gap-2">
                      <Icon name="FileSpreadsheet" size={18} className="text-success" />
                      <span className="font-semibold">Excel отчёт</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Экспорт в таблицу</span>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-4">
                  <div className="flex flex-col items-start gap-1 w-full">
                    <div className="flex items-center gap-2">
                      <Icon name="FileText" size={18} className="text-destructive" />
                      <span className="font-semibold">PDF отчёт</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Сохранить PDF</span>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-4">
                  <div className="flex flex-col items-start gap-1 w-full">
                    <div className="flex items-center gap-2">
                      <Icon name="Mail" size={18} className="text-primary" />
                      <span className="font-semibold">Email отчёт</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Отправить на почту</span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
