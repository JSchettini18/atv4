 
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  TextInput, 
  Switch, 
  Button,
  Dimensions
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const { width } = Dimensions.get('window');

const technologies = [
  {
    id: '1',
    name: 'Inteligência Artificial',
    description: 'Sistemas que simulam a inteligência humana para tarefas complexas, desde assistentes virtuais até diagnósticos médicos e reconhecimento de imagem.',
    image: 'https://profuturo.education/wp-content/uploads/2024/09/240927_PF-observatorio-IA-web-1.jpg',
    details: 'A inteligência artificial está revolucionando o mundo ao permitir que máquinas realizem tarefas que antes eram exclusivas dos seres humanos. Desde a automação industrial até a análise preditiva de dados, essa tecnologia está presente em diversas áreas. Empresas utilizam IA para personalizar serviços, otimizar processos e criar experiências interativas. No futuro, a inteligência artificial promete impulsionar ainda mais o desenvolvimento de novas tecnologias, tornando-se essencial em setores como saúde, finanças e transporte.',
    examples: [
      { id: '1', name: 'ChatGPT', description: 'Um modelo de linguagem avançado que pode gerar texto semelhante ao humano.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png' },
      { id: '2', name: 'Tesla Autopilot', description: 'Sistema de condução autônoma que utiliza IA para dirigir veículos.', image: 'https://th.bing.com/th/id/OIP.83dlakQl_AvP_yYWWq8gkAHaE8?w=227&h=180&c=7&r=0&o=5&pid=1.7' },
      { id: '3', name: 'IBM Watson', description: 'Plataforma de IA que oferece soluções para análise de dados e tomada de decisões.', image: 'https://th.bing.com/th/id/OIP.zFoSZa21hAnc66JD_HPcaAHaGu?rs=1&pid=ImgDetMain' },
      { id: '4', name: 'Google DeepMind', description: 'Conhecido por desenvolver o AlphaGo, um programa que venceu campeões mundiais de Go.', image: 'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/04/25/google-deepmind.jpeg' },
      { id: '5', name: 'Amazon Alexa', description: 'Assistente virtual que utiliza IA para realizar tarefas e responder perguntas.', image: 'https://m.media-amazon.com/images/I/51V1+7TE4jL.png' },
    ],
  },
  {
    id: '2',
    name: 'Computação Quântica',
    description: 'Uso de bits quânticos para resolver problemas impossíveis para computadores clássicos, revolucionando a criptografia e a simulação molecular.',
    image: 'https://img.odcdn.com.br/wp-content/uploads/2021/08/shutterstock_652948648.jpg',
    details: 'A computação quântica utiliza princípios da mecânica quântica para processar informações de maneira exponencialmente mais rápida do que os computadores convencionais. Seus qubits permitem realizar cálculos complexos, trazendo avanços significativos em áreas como segurança digital, inteligência artificial e pesquisa científica. Empresas como Google e IBM investem nessa tecnologia para resolver problemas matemáticos e químicos que levariam séculos para serem resolvidos com métodos tradicionais.',
    examples: [
      { id: '1', name: 'IBM Q System One', description: 'O primeiro computador quântico comercial da IBM.', image: 'https://www.forschungsfabrik-mikroelektronik.de/en/focus-topics/next-generation-computing/ibm-q-system-one/jcr:content/contentPar/sectioncomponent/sectionParsys/textwithinlinedimage/imageComponent1/image.img.4col.jpg/1704978388586/IBM-SystemOne-Andrew-Lindemann-2.jpg' },
      { id: '2', name: 'Google Sycamore', description: 'Processador quântico que alcançou a supremacia quântica.', image: 'https://www.cnet.com/a/img/resize/b8275a42f41a1ea4420649e0cad1e0c5893051ed/hub/2019/10/23/365ced13-a80d-4f6e-967d-302c2fe53806/20191023-google-quantum-computer-lab-010.jpg?auto=webp&width=1200' },
      { id: '3', name: 'D-Wave', description: 'Empresa pioneira em computação quântica adiabática.', image: 'https://thequantuminsider.com/wp-content/uploads/2020/02/D-Wave-Two-in-Lab.png' },
      { id: '4', name: 'Rigetti Computing', description: 'Desenvolve computadores quânticos baseados em supercondutores.', image: 'https://d1.awsstatic.com/logos/Rigetti%20QPU-min%20(2).04118eda8adf2236d99be6808c13016e6f5461c5.jpg' },
      { id: '5', name: 'Honeywell Quantum Solutions', description: 'Oferece soluções quânticas para otimização e simulação.', image: 'https://www.honeywell.com/content/dam/honeywellbt/en/images/content-images/news/article-banners/hon-ab-Quantum-Solutions.jpg' },
    ],
  },
  {
    id: '3',
    name: '5G',
    description: 'Nova geração de redes móveis com alta velocidade e baixa latência, permitindo avanços na Internet das Coisas e realidade aumentada.',
    image: 'https://teletime.com.br/wp-content/uploads/2020/01/5G_upscaled_illustration_x4.jpg',
    details: 'A tecnologia 5G representa um salto na comunicação móvel, proporcionando velocidades extremamente rápidas e uma latência muito baixa. Isso possibilita o desenvolvimento de cidades inteligentes, veículos autônomos e novas experiências em realidade aumentada e virtual. Além disso, a conectividade aprimorada do 5G suporta um grande número de dispositivos simultaneamente, melhorando a eficiência de redes industriais, médicas e domésticas.',
    examples: [
      { id: '1', name: 'Verizon 5G', description: 'Uma das primeiras redes 5G comerciais nos EUA.', image: 'https://mobiletrans.wondershare.com/images/en/article-images/Verizon-5G-2.jpg' },
      { id: '2', name: 'Ericsson 5G', description: 'Fornece infraestrutura 5G para operadoras globais.', image: 'https://download.logo.wine/logo/Ericsson/Ericsson-Logo.wine.png' },
      { id: '3', name: 'Huawei 5G', description: 'Líder em equipamentos 5G, apesar de controvérsias.', image: 'https://upload.wikimedia.org/wikipedia/pt/1/11/Huawei_logo.png' },
      { id: '4', name: 'Qualcomm Snapdragon', description: 'Processadores que suportam 5G em dispositivos móveis.', image: 'https://i.pinimg.com/736x/62/01/99/620199dcf6db9cf035f887fb1b78bf0a.jpg' },
      { id: '5', name: 'Samsung 5G', description: 'Desenvolve soluções 5G para smartphones e redes.', image: 'https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/360_197_1.png?$720_N_PNG$' },
    ],
  },
  {
    id: '4',
    name: 'Blockchain',
    description: 'Tecnologia descentralizada que garante segurança e transparência em transações financeiras e contratos inteligentes.',
    image: 'https://azuton.com/wp-content/uploads/2022/04/Afinal-o-que-e-Blockchain-1170x640-1.jpg',
    details: 'O blockchain é uma tecnologia descentralizada que garante a segurança e transparência de transações digitais. Ele é amplamente utilizado em criptomoedas, mas também tem aplicações em cadeias de suprimentos, contratos inteligentes e autenticação de identidade digital. Sua estrutura à prova de fraudes torna-o um recurso valioso para empresas e governos, permitindo o rastreamento seguro de ativos e a criação de sistemas financeiros mais confiáveis.',
    examples: [
      { id: '1', name: 'Bitcoin', description: 'A primeira e mais conhecida criptomoeda baseada em blockchain.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' },
      { id: '2', name: 'Ethereum', description: 'Plataforma de blockchain que suporta contratos inteligentes.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png' },
      { id: '3', name: 'Hyperledger', description: 'Projeto de blockchain empresarial liderado pela Linux Foundation.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNEGCjcWYDRJXoBz06Ifgy9trzbV8RVDJBypZCe3-OLpX_sfHZM1U4DqJlVR_53OnjJ7EeOhug1f_64vlwN4D3jbthqMlVwMYEG9tRtE' },
      { id: '4', name: 'Ripple', description: 'Focado em soluções de pagamento global usando blockchain.', image: 'https://cdn.prod.website-files.com/5ef503b9dcd722d7cc5424e7/5ffcbdc531ae7dbefcdcf353_Ripple%20XRP.png' },
      { id: '5', name: 'Chainlink', description: 'Conecta contratos inteligentes com dados do mundo real.', image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1975.png' },
    ],
  },
  {
    id: '5',
    name: 'Realidade Aumentada',
    description: 'Tecnologia que sobrepõe elementos virtuais ao mundo real, aprimorando experiências em jogos, varejo, saúde e treinamentos.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQexD3XsvbWVXIAhzcWqmbe2DGI5BFShmo5GA&s',
    details: 'A realidade aumentada transforma a forma como interagimos com o mundo, combinando elementos virtuais com o ambiente físico. Aplicações incluem desde jogos interativos até treinamentos médicos e simulações industriais. Empresas de varejo usam essa tecnologia para proporcionar experiências imersivas aos clientes, permitindo a visualização de produtos antes da compra. No futuro, a RA será fundamental na educação, turismo e assistência remota.',
    examples: [
      { id: '1', name: 'Pokémon GO', description: 'Jogo que popularizou a realidade aumentada.', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/video-games/pokemon_go/169.jpg' },
      { id: '2', name: 'Microsoft HoloLens', description: 'Óculos de realidade aumentada para aplicações empresariais.', image: 'https://t2.tudocdn.net/490676?w=1920&h=1440' },
      { id: '3', name: 'ARKit', description: 'Ferramenta da Apple para desenvolvimento de aplicativos de RA.', image: 'https://files.meiobit.com/wp-content/uploads/2017/06/20170628apple-arkit.jpg' },
      { id: '4', name: 'Google ARCore', description: 'Plataforma da Google para criar experiências de RA.', image: 'https://cdn.arstechnica.net/wp-content/uploads/2018/02/ARCore-logo.jpg' },
      { id: '5', name: 'IKEA Place', description: 'Aplicativo que permite visualizar móveis em sua casa usando RA.', image: 'https://www.ikea.com/global/en/images/484828_b4450698dc.jpg' },
    ],
  }
];


const App = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  // Estados para os novos componentes
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
  const [textInput3, setTextInput3] = useState('');
  const [textInput4, setTextInput4] = useState('');
  const [selectedPicker1, setSelectedPicker1] = useState('opcao1');
  const [selectedPicker2, setSelectedPicker2] = useState('opcao1');
  const [sliderValue1, setSliderValue1] = useState(50);
  const [sliderValue2, setSliderValue2] = useState(30);
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const renderExampleItem = ({ item }) => (
    <View style={styles.exampleCard}>
      <Image source={{ uri: item.image }} style={styles.exampleImage} />
      <View style={styles.exampleTextContainer}>
        <Text style={styles.exampleName}>{item.name}</Text>
        <Text style={styles.exampleDescription}>{item.description}</Text>
      </View>
    </View>
  );

  const handleButtonPress = () => {
    setButtonPressed(true);
    setTimeout(() => setButtonPressed(false), 1000);
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

   return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Tecnologias Emergentes</Text>
      {selectedTech ? (
        <ScrollView 
          contentContainerStyle={styles.detailsContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.techHeader}>
            <Image source={{ uri: selectedTech.image }} style={styles.largeImage} />
            <Text style={styles.name}>{selectedTech.name}</Text>
            <Text style={styles.description}>{selectedTech.details}</Text>
          </View>
          
          {/* Seção de Formulário */}
          <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>Formulário de Interesse</Text>
            
            {/* Inputs */}
            <TextInput style={styles.input} placeholder="Digite seu nome" />
            <TextInput style={styles.input} placeholder="Digite seu email" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Qual sua profissão?" />
            <TextInput style={[styles.input, styles.multilineInput]} placeholder="Comentários" multiline />
            
            {/* Pickers */}
            <View style={styles.pickerWrapper}>
              <Text style={styles.label}>Nível de interesse:</Text>
              <View style={styles.pickerContainer}>
                <Picker selectedValue={selectedPicker1} onValueChange={setSelectedPicker1}>
                  <Picker.Item label="Baixo" value="opcao1" />
                  <Picker.Item label="Médio" value="opcao2" />
                  <Picker.Item label="Alto" value="opcao3" />
                </Picker>
              </View>
            </View>

            <View style={styles.pickerWrapper}>
              <Text style={styles.label}>Área de atuação:</Text>
              <View style={styles.pickerContainer}>
                <Picker selectedValue={selectedPicker2} onValueChange={setSelectedPicker2}>
                  <Picker.Item label="Tecnologia" value="opcao1" />
                  <Picker.Item label="Educação" value="opcao2" />
                  <Picker.Item label="Saúde" value="opcao3" />
                  <Picker.Item label="Negócios" value="opcao4" />
                </Picker>
              </View>
            </View>

            {/* Sliders */}
            <View style={styles.sliderWrapper}>
              <Text style={styles.label}>Nível de conhecimento: {sliderValue1}%</Text>
              <Slider
                value={sliderValue1}
                onValueChange={setSliderValue1}
                minimumValue={0}
                maximumValue={100}
                step={5}
                minimumTrackTintColor="#007bff"
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor="#007bff"
                style={styles.slider}
              />
            </View>

            <View style={styles.sliderWrapper}>
              <Text style={styles.label}>Nível de adoção: {sliderValue2}%</Text>
              <Slider
                value={sliderValue2}
                onValueChange={setSliderValue2}
                minimumValue={0}
                maximumValue={100}
                step={5}
                minimumTrackTintColor="#007bff"
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor="#007bff"
                style={styles.slider}
              />
            </View>

            {/* Switches */}
            <View style={styles.switchWrapper}>
              <Text style={styles.label}>Receber notificações?</Text>
              <Switch
                value={switch1}
                onValueChange={setSwitch1}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={switch1 ? "#007bff" : "#f4f3f4"}
              />
            </View>

            <View style={styles.switchWrapper}>
              <Text style={styles.label}>Compartilhar dados?</Text>
              <Switch
                value={switch2}
                onValueChange={setSwitch2}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={switch2 ? "#007bff" : "#f4f3f4"}
              />
            </View>

            {/* Botões */}
            <View style={styles.buttonsWrapper}>
              <View style={styles.buttonContainer}>
                <Button
                  title={buttonPressed ? "Obrigado!" : "Clique aqui"}
                  onPress={handleButtonPress}
                  color="#007bff"
                />
              </View>
              
              <View style={styles.buttonContainer}>
                <Button
                  title="Enviar Formulário"
                  onPress={handleSubmit}
                  color="#28a745"
                />
              </View>
            </View>
            
            {formSubmitted && (
              <Text style={styles.successMessage}>Formulário enviado com sucesso!</Text>
            )}

            {/* Imagens */}
            <Text style={[styles.label, { marginTop: 20 }]}>Formas Geométricas:</Text>
            <View style={styles.imagesWrapper}>
              {['Circulo', 'Quadrado', 'Aredondado', 'triangulo', 'oval'].map((shape, index) => (
                <View key={index} style={styles.imageContainer}>
                  <View style={[styles.shape, styles[`${shape}Shape`]]} />
                  <Text style={styles.shapeLabel}>
                    {shape.charAt(0).toUpperCase() + shape.slice(1)}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Exemplos */}
          <Text style={styles.subtitle}>Exemplos de {selectedTech.name}</Text>
          <FlatList
            data={selectedTech.examples}
            keyExtractor={(item) => item.id}
            renderItem={renderExampleItem}
            scrollEnabled={false}
          />

          <TouchableOpacity onPress={() => setSelectedTech(null)} style={styles.backButton}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <FlatList
          data={technologies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.card} 
              onPress={() => setSelectedTech(item)}
              activeOpacity={0.7}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.detailsLink}>Ver Detalhes →</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#343a40',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 180,
  },
  textContainer: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#212529',
  },
  description: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 12,
    lineHeight: 20,
  },
  detailsLink: {
    color: '#007bff',
    fontWeight: '500',
    textAlign: 'right',
  },
  detailsContainer: {
    paddingBottom: 24,
  },
  techHeader: {
    marginBottom: 24,
  },
  largeImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  formSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#212529',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#f1f3f5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  pickerWrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 8,
    fontWeight: '500',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#dee2e6',
    borderRadius: 8,
    overflow: 'hidden',
  },
  sliderWrapper: {
    marginBottom: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  switchWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 8,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
  successMessage: {
    color: '#28a745',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '500',
  },
  imagesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  imageContainer: {
    alignItems: 'center',
    width: (width - 48) / 3,
    marginBottom: 16,
  },
  shape: {
    width: 60,
    height: 60,
    backgroundColor: '#007bff',
    marginBottom: 8,
  },
  circleShape: {
    borderRadius: 30,
  },
  squareShape: {
    borderRadius: 0,
  },
  roundedShape: {
    borderRadius: 12,
  },
  triangleShape: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 52,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#007bff',
  },
  ovalShape: {
    width: 80,
    height: 40,
    borderRadius: 40,
  },
  shapeLabel: {
    fontSize: 12,
    color: '#495057',
  },
  exampleCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 1,
  },
  exampleImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  exampleTextContainer: {
    flex: 1,
  },
  exampleName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#212529',
  },
  exampleDescription: {
    fontSize: 12,
    color: '#6c757d',
    lineHeight: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#212529',
  },
  backButton: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;