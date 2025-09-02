"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Leaf, Shield, Sparkles, Heart, CheckCircle, X, Zap, ShoppingCart } from "lucide-react"

export default function SambaLandingPage() {
  const whatsappNumber = "5511981038127"

  const createWhatsAppLink = (productName: string, price: string) => {
    const message = `Olá! Gostaria de comprar o ${productName} por ${price}. Poderia me ajudar?`
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  }

  const scrollToOffers = () => {
    const offersSection = document.getElementById("offers-section")
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900">
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full p-4 shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() =>
            window.open(
              `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos SAMBA Professional.")}`,
              "_blank",
            )
          }
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
          </svg>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-8 md:pb-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-300 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="pt-8 md:pt-20 space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Transforme seu cabelo com a{" "}
                  <span className="text-yellow-400 font-serif italic text-4xl md:text-5xl lg:text-7xl xl:text-8xl block mt-2 md:mt-4 drop-shadow-2xl leading-none">
                    força da natureza brasileira
                  </span>
                </h2>

                <p className="text-lg md:text-xl lg:text-2xl text-emerald-100 font-light leading-relaxed">
                  O primeiro shampoo que combina hidratação profunda, sustentabilidade e a essência tropical do Brasil.
                  <span className="block mt-2 text-yellow-300 font-semibold text-xl md:text-2xl lg:text-3xl">
                    Cabelos 15x mais hidratados em apenas uma aplicação.
                  </span>
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
                  <div className="flex items-center gap-2 text-emerald-100">
                    <Leaf className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                    <span className="text-base md:text-lg font-medium">100% Natural</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-100">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                    <span className="text-base md:text-lg font-medium">Sem Sulfato</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-100">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                    <span className="text-base md:text-lg font-medium">Hidratação 15x</span>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <Button
                    size="lg"
                    className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-300 text-emerald-900 font-bold text-base md:text-lg lg:text-xl xl:text-2xl px-6 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 min-h-[60px] md:min-h-[80px] text-wrap"
                    onClick={scrollToOffers}
                  >
                    🛒 COMPRAR AGORA
                  </Button>

                  <div className="flex flex-col sm:flex-row items-center gap-3 text-emerald-100 pt-8 md:pt-12 pb-8 md:pb-16">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-base md:text-lg text-center sm:text-left">4.9/5 • Mais de 10.000 clientes satisfeitas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/images/samba-hero.png"
                  alt="SAMBA Professional - Mulher com produtos de hidratação capilar"
                  className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-3xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-emerald-300 rounded-full opacity-30 blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 md:mb-6">
                Você está <span className="text-red-500">cansada</span> de cabelos ressecados?
              </h2>
              <p className="text-lg md:text-xl text-emerald-700 max-w-3xl mx-auto">
                Sabemos exatamente como você se sente. Testamos centenas de fórmulas até criar a solução perfeita.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start mb-12 md:mb-16">
              {/* Problemas */}
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-6 md:mb-8">❌ Os problemas que você enfrenta:</h3>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-red-50 rounded-2xl border-l-4 border-red-400">
                    <X className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-red-700 text-base md:text-lg mb-2">Cabelo ressecado e sem vida</h4>
                      <p className="text-red-600 text-sm md:text-base">
                        Você gasta fortunas em produtos que prometem hidratação, mas seu cabelo continua opaco,
                        quebradiço e difícil de pentear.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-red-50 rounded-2xl border-l-4 border-red-400">
                    <X className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-red-700 text-base md:text-lg mb-2">Produtos químicos agressivos</h4>
                      <p className="text-red-600 text-sm md:text-base">
                        Shampoos com sulfato que ressecam ainda mais, deixando você presa em um ciclo vicioso de danos
                        capilares.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-red-50 rounded-2xl border-l-4 border-red-400">
                    <X className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-red-700 text-base md:text-lg mb-2">Autoestima em baixa</h4>
                      <p className="text-red-600 text-sm md:text-base">
                        Você evita fotos, se sente insegura e sonha em ter aqueles cabelos brilhantes que vê nas redes
                        sociais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Soluções */}
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-6 md:mb-8">✅ A solução que você procurava:</h3>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-400">
                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-emerald-700 text-base md:text-lg mb-2">Hidratação profunda instantânea</h4>
                      <p className="text-emerald-600 text-sm md:text-base">
                        Nossa fórmula com ácido hialurônico penetra profundamente nos fios, proporcionando 15x mais
                        hidratação desde a primeira aplicação.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-400">
                    <Leaf className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-emerald-700 text-base md:text-lg mb-2">100% natural e sustentável</h4>
                      <p className="text-emerald-600 text-sm md:text-base">
                        Ingredientes brasileiros premium, sem sulfato, sem parabenos. Cuida do seu cabelo respeitando a
                        natureza.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-400">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-emerald-700 text-base md:text-lg mb-2">Autoestima renovada</h4>
                      <p className="text-emerald-600 text-sm md:text-base">
                        Cabelos sedosos, brilhantes e saudáveis que fazem você se sentir confiante e radiante todos os
                        dias.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action da seção */}
            <div className="text-center bg-gradient-to-r from-emerald-600 to-yellow-500 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Não sofra mais com cabelos ressecados!</h3>
              <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
                Milhares de mulheres já transformaram seus cabelos com SAMBA Professional. Chegou a sua vez de ter os
                cabelos dos seus sonhos.
              </p>
              <Button
                size="lg"
                className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-300 text-emerald-900 font-bold text-sm md:text-lg lg:text-xl px-6 md:px-8 lg:px-12 py-4 md:py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 min-h-[60px] md:min-h-[70px] text-wrap"
                onClick={scrollToOffers}
              >
                🌟 QUERO TRANSFORMAR MEU CABELO AGORA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Offers Section */}
      <section id="offers-section" className="py-12 md:py-20 bg-gradient-to-br from-white via-emerald-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 md:mb-6">
              Escolha o <span className="text-yellow-500 font-serif italic">produto perfeito</span> para você
            </h2>
            <p className="text-lg md:text-xl text-emerald-700 max-w-3xl mx-auto">
              Linha completa SAMBA Professional com desconto especial. Frete grátis para todo o Brasil!
            </p>
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-base md:text-lg mt-4 md:mt-6 animate-pulse">
              🔥 OFERTA LIMITADA - ATÉ 45% OFF
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Shampoo All Soft 15 em 1 */}
            <Card className="border-2 border-emerald-200 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <img
                    src="/images/shampoo-all-soft.png"
                    alt="Shampoo All Soft 15 em 1"
                    className="w-32 h-48 mx-auto object-contain"
                  />
                  <h3 className="text-xl font-bold text-emerald-900">Shampoo All Soft 15 em 1</h3>
                  <p className="text-emerald-700 text-sm">300ml - Hidratação extrema para todos os tipos de cabelo</p>

                  <div className="space-y-2">
                    <div className="text-lg text-emerald-600 line-through">De: R$ 127,92</div>
                    <div className="text-3xl font-bold text-emerald-900">R$ 69,48</div>
                    <div className="text-sm text-emerald-600">ou 3x de R$ 23,16</div>
                    <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      45% OFF
                    </div>
                  </div>

                  <Button
                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-emerald-900 font-bold py-4 md:py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base min-h-[50px] md:min-h-[44px] text-wrap"
                    onClick={() =>
                      window.open(createWhatsAppLink("Shampoo All Soft 15 em 1 (300ml)", "R$ 69,48"), "_blank")
                    }
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    COMPRAR AGORA
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Máscara All Soft Pitaya */}
            <Card className="border-2 border-emerald-200 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <img
                    src="/images/mascara-all-soft.png"
                    alt="Máscara All Soft Pitaya"
                    className="w-32 h-48 mx-auto object-contain"
                  />
                  <h3 className="text-xl font-bold text-emerald-900">Máscara All Soft Pitaya</h3>
                  <p className="text-emerald-700 text-sm">300g - Tratamento intensivo de hidratação</p>

                  <div className="space-y-2">
                    <div className="text-lg text-emerald-600 line-through">De: R$ 131,77</div>
                    <div className="text-3xl font-bold text-emerald-900">R$ 72,46</div>
                    <div className="text-sm text-emerald-600">ou 3x de R$ 24,15</div>
                    <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      45% OFF
                    </div>
                  </div>

                  <Button
                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-emerald-900 font-bold py-4 md:py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base min-h-[50px] md:min-h-[44px] text-wrap"
                    onClick={() =>
                      window.open(createWhatsAppLink("Máscara All Soft Pitaya (300g)", "R$ 72,46"), "_blank")
                    }
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    COMPRAR AGORA
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Protetor Térmico Smooth Liss */}
            <Card className="border-2 border-emerald-200 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <img
                    src="/images/smooth-liss.png"
                    alt="Protetor Térmico Smooth Liss"
                    className="w-32 h-48 mx-auto object-contain"
                  />
                  <h3 className="text-xl font-bold text-emerald-900">Protetor Térmico Smooth Liss</h3>
                  <p className="text-emerald-700 text-sm">120ml - Proteção térmica e alisamento</p>

                  <div className="space-y-2">
                    <div className="text-lg text-emerald-600 line-through">De: R$ 136,22</div>
                    <div className="text-3xl font-bold text-emerald-900">R$ 74,92</div>
                    <div className="text-sm text-emerald-600">ou 3x de R$ 24,97</div>
                    <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      45% OFF
                    </div>
                  </div>

                  <Button
                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-emerald-900 font-bold py-4 md:py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base min-h-[50px] md:min-h-[44px] text-wrap"
                    onClick={() =>
                      window.open(createWhatsAppLink("Protetor Térmico Smooth Liss (120ml)", "R$ 74,92"), "_blank")
                    }
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    COMPRAR AGORA
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Shampoo Brazilian Curls */}
            <Card className="border-2 border-emerald-200 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <img
                    src="/images/shampoo-brazilian-curls.png"
                    alt="Shampoo Brazilian Curls"
                    className="w-32 h-48 mx-auto object-contain"
                  />
                  <h3 className="text-xl font-bold text-emerald-900">Shampoo Brazilian Curls</h3>
                  <p className="text-emerald-700 text-sm">300ml - Especial para cabelos cacheados</p>

                  <div className="space-y-2">
                    <div className="text-lg text-emerald-600 line-through">De: R$ 104,00</div>
                    <div className="text-3xl font-bold text-emerald-900">R$ 57,20</div>
                    <div className="text-sm text-emerald-600">ou 3x de R$ 19,07</div>
                    <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      45% OFF
                    </div>
                  </div>

                  <Button
                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-emerald-900 font-bold py-4 md:py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base min-h-[50px] md:min-h-[44px] text-wrap"
                    onClick={() =>
                      window.open(createWhatsAppLink("Shampoo Brazilian Curls (300ml)", "R$ 57,20"), "_blank")
                    }
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    COMPRAR AGORA
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Condicionador Miracle for Curls */}
            <Card className="border-2 border-emerald-200 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <img
                    src="/images/condicionador-curls.png"
                    alt="Condicionador Miracle for Curls"
                    className="w-32 h-48 mx-auto object-contain"
                  />
                  <h3 className="text-xl font-bold text-emerald-900">Miracle for Curls Condicionador</h3>
                  <p className="text-emerald-700 text-sm">300ml - Desembaraça e define cachos</p>

                  <div className="space-y-2">
                    <div className="text-lg text-emerald-600 line-through">De: R$ 106,25</div>
                    <div className="text-3xl font-bold text-emerald-900">R$ 58,59</div>
                    <div className="text-sm text-emerald-600">ou 3x de R$ 19,53</div>
                    <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      45% OFF
                    </div>
                  </div>

                  <Button
                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-emerald-900 font-bold py-4 md:py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base min-h-[50px] md:min-h-[44px] text-wrap"
                    onClick={() =>
                      window.open(createWhatsAppLink("Miracle for Curls Condicionador (300ml)", "R$ 58,59"), "_blank")
                    }
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    COMPRAR AGORA
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Spray Antifrizz */}
            <Card className="border-2 border-emerald-200 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <img
                    src="/images/spray-antifrizz.png"
                    alt="Nutrition for Curls Spray Antifrizz"
                    className="w-32 h-48 mx-auto object-contain"
                  />
                  <h3 className="text-xl font-bold text-emerald-900">Nutrition for Curls Spray</h3>
                  <p className="text-emerald-700 text-sm">250ml - Controle de frizz e nutrição</p>

                  <div className="space-y-2">
                    <div className="text-lg text-emerald-600 line-through">De: R$ 126,02</div>
                    <div className="text-3xl font-bold text-emerald-900">R$ 69,31</div>
                    <div className="text-sm text-emerald-600">ou 3x de R$ 23,10</div>
                    <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      45% OFF
                    </div>
                  </div>

                  <Button
                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-emerald-900 font-bold py-4 md:py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base min-h-[50px] md:min-h-[44px] text-wrap"
                    onClick={() =>
                      window.open(
                        createWhatsAppLink("Nutrition for Curls Spray Antifrizz (250ml)", "R$ 69,31"),
                        "_blank",
                      )
                    }
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    COMPRAR AGORA
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Special Offer Banner */}
          <div className="mt-12 md:mt-16 bg-gradient-to-r from-emerald-600 to-yellow-500 rounded-3xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">🎁 OFERTA ESPECIAL</h3>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Compre 2 produtos e ganhe <strong>FRETE GRÁTIS</strong> + <strong>15% de desconto extra</strong>!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5" />
                <span>Compra Segura</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-4 h-4 md:w-5 md:h-5" />
                <span>Garantia 30 dias</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                <span>Entrega Rápida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 md:mb-6">
              Por que escolher <span className="text-yellow-500 font-serif italic">SAMBA</span>?
            </h2>
            <p className="text-lg md:text-xl text-emerald-700 max-w-3xl mx-auto">
              Desenvolvido com ingredientes brasileiros premium para resultados profissionais em casa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-colors duration-300 shadow-lg">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3 md:mb-4">Hidratação Extrema</h3>
                <p className="text-emerald-700 leading-relaxed text-sm md:text-base">
                  Fórmula exclusiva com ácido hialurônico que proporciona 15x mais hidratação, deixando seus cabelos
                  sedosos e brilhantes por semanas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-colors duration-300 shadow-lg">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Leaf className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3 md:mb-4">100% Sustentável</h3>
                <p className="text-emerald-700 leading-relaxed text-sm md:text-base">
                  Ingredientes naturais brasileiros, embalagem reciclável e processo de produção que respeita o meio
                  ambiente. Beleza consciente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-colors duration-300 shadow-lg">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3 md:mb-4">Para Todos os Tipos</h3>
                <p className="text-emerald-700 leading-relaxed text-sm md:text-base">
                  Fórmula universal que funciona em cabelos lisos, ondulados, cacheados e crespos. Resultados
                  profissionais para toda família.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Product Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="relative group">
              <img
                src="/images/samba-blonde.png"
                alt="SAMBA Professional - Cabelos loiros hidratados"
                className="w-full rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
            <div className="relative group">
              <img
                src="/images/samba-tropical.png"
                alt="SAMBA Professional - Ambiente tropical luxuoso"
                className="w-full rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
            <div className="relative group">
              <img
                src="/images/samba-curly.png"
                alt="SAMBA Professional - Cabelos cacheados naturais"
                className="w-full rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-r from-emerald-50 to-yellow-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/samba-tropical.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 md:mb-6">
              Mais de <span className="text-yellow-500">10.000 mulheres</span> já transformaram seus cabelos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-0">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 md:gap-4 mb-4">
                  <img
                    src="/brazilian-woman-smiling-straight-hair.png"
                    alt="Maria Silva"
                    className="w-12 h-12 md:w-15 md:h-15 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-emerald-900 text-sm md:text-base">Maria Silva</div>
                    <div className="text-xs md:text-sm text-emerald-600">São Paulo</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-emerald-700 italic text-sm md:text-base">
                  "Meu cabelo nunca esteve tão hidratado! O SAMBA realmente cumpre o que promete. Uso há 3 meses e
                  recebo elogios toda semana."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-0">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 md:gap-4 mb-4">
                  <img
                    src="/brazilian-woman-curly-hair-smiling.png"
                    alt="Ana Costa"
                    className="w-12 h-12 md:w-15 md:h-15 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-emerald-900 text-sm md:text-base">Ana Costa</div>
                    <div className="text-xs md:text-sm text-emerald-600">Rio de Janeiro</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-emerald-700 italic text-sm md:text-base">
                  "Tenho cabelo cacheado e sempre foi difícil encontrar produtos que funcionassem. O SAMBA é perfeito -
                  hidrata sem pesar!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-0">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 md:gap-4 mb-4">
                  <img
                    src="/brazilian-woman-wavy-hair-happy.png"
                    alt="Carla Mendes"
                    className="w-12 h-12 md:w-15 md:h-15 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-emerald-900 text-sm md:text-base">Carla Mendes</div>
                    <div className="text-xs md:text-sm text-emerald-600">Belo Horizonte</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-emerald-700 italic text-sm md:text-base">
                  "Além dos resultados incríveis, amo saber que estou usando um produto sustentável. Beleza com
                  consciência ambiental!"
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-300 text-emerald-900 font-bold text-lg md:text-xl lg:text-2xl px-6 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 min-h-[60px] md:min-h-[80px] text-wrap"
              onClick={scrollToOffers}
            >
              🛒 ADQUIRA AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* Final Trust Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <img
                src="/images/samba-blue.png"
                alt="SAMBA Professional - Linha completa hidratante"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-900">
                Sua satisfação é nossa <span className="text-yellow-500">garantia</span>
              </h3>
              <p className="text-base md:text-lg text-emerald-700 leading-relaxed">
                Estamos tão confiantes nos resultados do SAMBA Professional que oferecemos 30 dias de garantia total. Se
                você não ficar completamente satisfeita, devolvemos 100% do seu dinheiro.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                  <span className="text-emerald-700 font-medium text-sm md:text-base">Compra 100% segura e protegida</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                  <span className="text-emerald-700 font-medium text-sm md:text-base">Atendimento humanizado e especializado</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                  <span className="text-emerald-700 font-medium text-sm md:text-base">Resultados visíveis em 7 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-emerald-50 via-white to-yellow-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 md:mb-6">
                Conheça o <span className="text-yellow-500 font-serif italic">Especialista</span>
              </h2>
              <p className="text-lg md:text-xl text-emerald-700 max-w-3xl mx-auto">
                Por trás de cada produto SAMBA há anos de pesquisa e paixão pela beleza brasileira
              </p>
            </div>

            {/* Expert Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Expert Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/images/sandro-mulinary.png"
                    alt="Sandro Mulinary - Fundador da SAMBA Professional"
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                </div>

                {/* Floating credentials */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border-2 border-yellow-400">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-900">15+</div>
                    <div className="text-sm text-emerald-600 font-medium">Anos de</div>
                    <div className="text-sm text-emerald-600 font-medium">Experiência</div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-900">50k+</div>
                    <div className="text-sm text-emerald-900 font-medium">Clientes</div>
                    <div className="text-sm text-emerald-900 font-medium">Atendidos</div>
                  </div>
                </div>
              </div>

              {/* Expert Info */}
              <div className="space-y-6 md:space-y-8">
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-900">SANDRO MULINARY</h3>
                  <p className="text-lg md:text-xl text-yellow-600 font-semibold">FUNDADOR DA SAMBA PROFESSIONAL</p>
                </div>

                {/* Quote */}
                <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 md:p-6 rounded-r-2xl">
                  <p className="text-base md:text-lg text-emerald-800 italic leading-relaxed">
                    "Mais que um produto, uma missão: entregar resultados reais com ativos nobres e sem agressão aos
                    fios."
                  </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-white rounded-xl p-3 md:p-4 shadow-md border border-emerald-100">
                    <div className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                      <span className="font-semibold text-emerald-900 text-sm md:text-base">SEM FORMOL</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 md:p-4 shadow-md border border-emerald-100">
                    <div className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                      <span className="font-semibold text-emerald-900 text-sm md:text-base">BRILHO INTENSO</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 md:p-4 shadow-md border border-emerald-100">
                    <div className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                      <span className="font-semibold text-emerald-900 text-sm md:text-base">SEDOSIDADE INTENSA</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 md:p-4 shadow-md border border-emerald-100">
                    <div className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                      <span className="font-semibold text-emerald-900 text-sm md:text-base">COMPATÍVEL COM COLORAÇÃO</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 md:p-4 shadow-md border border-emerald-100 md:col-span-2">
                    <div className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                      <span className="font-semibold text-emerald-900 text-sm md:text-base">NUTRIÇÃO E ALINHAMENTO PROFISSIONAL</span>
                    </div>
                  </div>
                </div>

                {/* Mission Statement */}
                <div className="bg-gradient-to-r from-emerald-600 to-yellow-500 rounded-2xl p-6 md:p-8 text-white">
                  <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Nossa Missão</h4>
                  <p className="text-base md:text-lg leading-relaxed">
                    Revolucionar o cuidado capilar brasileiro através de fórmulas inovadoras que respeitam a natureza
                    dos fios e entregam resultados profissionais em casa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Urgency Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-yellow-600 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-base md:text-lg animate-pulse">
              ⏰ ÚLTIMAS HORAS - OFERTA EXPIRA EM BREVE
            </div>

            {/* Main Headline */}
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                NÃO PERCA ESTA
                <span className="block text-yellow-400 font-serif italic">OPORTUNIDADE</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-emerald-100 max-w-3xl mx-auto">
                Milhares de mulheres já transformaram seus cabelos. Agora é a sua vez de ter cabelos dos sonhos!
              </p>
            </div>

            {/* Price Box */}
            <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-10 max-w-2xl mx-auto border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-emerald-200 text-xl mb-2">Preço normal:</div>
                  <div className="text-3xl text-emerald-200 line-through mb-4">R$ 129,90</div>
                  <div className="text-6xl lg:text-7xl font-bold text-yellow-400 mb-2">R$ 69,48</div>
                  <div className="text-emerald-100 text-lg">ou 3x de R$ 23,16 sem juros</div>
                  <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm mt-4">
                    ECONOMIA DE R$ 60,42
                  </div>
                </div>

                {/* Benefits List */}
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-3 text-emerald-100">
                    <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="font-medium">Frete GRÁTIS</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-100">
                    <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="font-medium">Garantia 30 dias</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-100">
                    <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="font-medium">Entrega rápida</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-100">
                    <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="font-medium">Suporte especializado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 md:space-y-6">
              <Button
                size="lg"
                className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-300 text-emerald-900 font-bold text-sm md:text-lg lg:text-2xl px-6 md:px-8 lg:px-16 py-6 md:py-8 lg:py-10 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse min-h-[70px] md:min-h-[100px] text-wrap"
                onClick={scrollToOffers}
              >
                🛒 SIM, QUERO TRANSFORMAR MEU CABELO AGORA!
              </Button>

              <div className="space-y-2">
                <p className="text-red-300 font-bold text-base md:text-lg">⚡ Restam apenas 23 unidades em estoque</p>
                <p className="text-emerald-200 text-xs md:text-sm">
                  🔒 Compra 100% segura • Pagamento protegido • Dados criptografados
                </p>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 text-emerald-100">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-base md:text-lg font-medium text-center sm:text-left">4.9/5 • +10.000 clientes satisfeitas</span>
            </div>

            {/* Final Message */}
            <div className="bg-yellow-400/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
              <p className="text-white text-base md:text-lg leading-relaxed">
                <strong className="text-yellow-400">
                  "Não deixe para amanhã a transformação que você pode começar hoje."
                </strong>
                <br />
                Junte-se às milhares de mulheres que já descobriram o segredo de cabelos incrivelmente hidratados e
                saudáveis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
