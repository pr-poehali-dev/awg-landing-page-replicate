import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-50 px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">AWG</div>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Связаться с нами
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/b1850cd2-053d-489f-b5fd-d4595d6270a5.jpg')`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-light mb-4">
            AI для бизнеса
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            next level IT
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            Связаться с нами
          </Button>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-center">Возможности ИИ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Brain" size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Компьютерное зрение</h3>
                <p className="text-gray-400">Анализ изображений и видео</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="MessageSquare" size={24} className="text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Речевые технологии</h3>
                <p className="text-gray-400">Обработка естественного языка</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Zap" size={24} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Машинное обучение</h3>
                <p className="text-gray-400">Предсказательная аналитика</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Shield" size={24} className="text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Прикладная аналитика</h3>
                <p className="text-gray-400">Бизнес-интеллект и отчетность</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Database" size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Автоматизация рутинных задач</h3>
                <p className="text-gray-400">Оптимизация бизнес-процессов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-center">Результаты с ИИ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-light text-red-400 mb-4">-15-25%</div>
              <p className="text-gray-400">Экономия ресурсов</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-light text-green-400 mb-4">+40%</div>
              <p className="text-gray-400">Улучшение CX</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-light text-blue-400 mb-4">+20-30%</div>
              <p className="text-gray-400">Рост доходов</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-light text-white mb-4">95%</div>
              <p className="text-gray-400">Быстрота решений</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-center">Решения</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">1</span>
                </div>
                <span className="text-white">CRM на базе</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">2</span>
                </div>
                <span className="text-white">Система контроля</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">3</span>
                </div>
                <span className="text-white">Система контроля</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">4</span>
                </div>
                <span className="text-white">Цифровой помощник</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gray-900/50 border-gray-800 aspect-square">
                <CardContent className="p-4 h-full flex flex-col justify-between">
                  <div className="text-sm text-gray-400">Системы распознавания</div>
                  <div className="text-xl text-white">Анализ</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 border-gray-800 aspect-square">
                <CardContent className="p-4 h-full flex flex-col justify-between">
                  <div 
                    className="w-full h-full bg-cover bg-center rounded"
                    style={{
                      backgroundImage: `url('https://cdn.poehali.dev/files/ada40a79-9fcb-4796-8097-ed05b5573479.jpeg')`
                    }}
                  />
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 border-gray-800 col-span-2">
                <CardContent className="p-4">
                  <div className="text-sm text-gray-400 mb-2">Анализ ключ-методов</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 border-gray-800 col-span-2">
                <CardContent className="p-4">
                  <div 
                    className="w-full h-32 bg-cover bg-center rounded"
                    style={{
                      backgroundImage: `url('/img/b1850cd2-053d-489f-b5fd-d4595d6270a5.jpg')`
                    }}
                  />
                  <div className="mt-2 flex space-x-2">
                    <div className="w-8 h-8 bg-gray-700 rounded"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded"></div>
                  </div>
                  <div className="mt-2 text-xs text-gray-400 flex justify-between">
                    <span>Система машинного зрения</span>
                    <span>Система распознавания лиц</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-center">Частые вопросы</h2>
          
          <div className="space-y-4">
            {[
              { q: "Как ИИ поможет развить конкурентное преимущество в бизнесе?", id: "01" },
              { q: "Сколько времени занимает внедрение ИИ?", id: "02" },
              { q: "Как ИИ поможет развить конкурентное преимущество в бизнесе?", id: "03" },
              { q: "Сколько времени занимает внедрение ИИ?", id: "04" },
              { q: "Как ИИ поможет развить конкурентное преимущество в бизнесе?", id: "05" },
              { q: "Сколько времени занимает внедрение ИИ?", id: "06" }
            ].map((item) => (
              <Card key={item.id} className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-500 text-sm">{item.id}</span>
                      <span className="text-white">{item.q}</span>
                    </div>
                    <Icon name="Plus" size={20} className="text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">AWG</div>
              <p className="text-gray-400 text-sm">
                AI-технологии для бизнеса.<br />
                IT-партнерство будущего.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">+7 495 105 96 32</h3>
              <p className="text-gray-400 text-sm">Проект офис</p>
              <p className="text-gray-400 text-sm">Обратиться к нашим</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm">г. Московская область</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm">Соцсети:</p>
              <div className="flex space-x-2 mt-2">
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2011-2024 Компания AWG.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;