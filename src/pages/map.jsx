import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/map.module.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const gardenIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/892/892917.png',
  iconSize: [35, 35],
});

const Mapa = () => {
  const [selectedHorta, setSelectedHorta] = useState(null);

  const hortas = [
    { id: 1, nome: 'Horta das Corujas', localizacao: [-23.567, -46.696], descricao: 'Endereço: Avenida das Corujas, 39, Vila Beatriz, São Paulo - SP' },
    { id: 2, nome: 'Horta Comunitária do Butantã', localizacao: [-23.566, -46.709], descricao: 'Endereço: Av. Corifeu de Azevedo Marques, 2500, Butantã, São Paulo - SP' },
    { id: 3, nome: 'Horta da Mooca', localizacao: [-23.558, -46.599], descricao: 'Endereço: Rua Taquari, 549, Mooca, São Paulo - SP' },
    { id: 4, nome: 'Horta do Centro Cultural São Paulo', localizacao: [-23.5746, -46.6386], descricao: 'Endereço: Rua Vergueiro, 1000, Paraíso, São Paulo - SP' }, // [1][5]
    { id: 5, nome: 'Horta da Galeria do Rock', localizacao: [-23.5452, -46.6417], descricao: 'Endereço: Avenida São João, 439, República, São Paulo - SP' }, // [1]
    { id: 6, nome: 'Horta Parque Imperial', localizacao: [-23.6462, -46.7219], descricao: 'Endereço: Rua Paracatu, 66, Parque Imperial, São Paulo - SP' }, // [1]
    { id: 7, nome: 'Horta João de Barro', localizacao: [-23.5725, -46.6368], descricao: 'Endereço: Rua Professor Picarolo, 123, Bela Vista, São Paulo - SP' }, // [3]
    { id: 8, nome: 'Nossa Horta Grand Reserva Paulista', localizacao: [-23.5199, -46.7107], descricao: 'Endereço: Av. Aparecida do Rio Negro, s/n, Praça Grand Reserva Paulista, Jardim Íris, São Paulo - SP' }, // [3]
    { id: 9, nome: 'Horta Viveiro II do Butantã', localizacao: [-23.5698, -46.7345], descricao: 'Endereço: Rua Paulo Ângelo Lanzarini, 334, Butantã, São Paulo - SP' }, // [3]
    { id: 10, nome: 'Horta na Laje Paraisópolis', localizacao: [-23.6236, -46.7302], descricao: 'Endereço: Rua Ernest Renan, 1366, Paraisópolis, São Paulo - SP' }, // [3]
    { id: 11, nome: 'Horta CCSP', localizacao: [-23.5746, -46.6386], descricao: 'Endereço: Rua Vergueiro, 1000, Paraíso, São Paulo - SP' }, // [5]
    { id: 12, nome: 'Horta da Vila Anglo', localizacao: [-23.5375, -46.6917], descricao: 'Endereço: Praça Antonio Resk, Vila Anglo, São Paulo - SP' }, // [5]
    { id: 13, nome: 'Horta Comunitária do Parque Ipê', localizacao: [-23.6611, -46.7742], descricao: 'Endereço: Rua Marujada, 53, Campo Limpo, São Paulo - SP' }, // [5]
    { id: 14, nome: 'Horta do IEE USP', localizacao: [-23.5618, -46.7356], descricao: 'Endereço: Av. Prof. Luciano Gualberto, 1289, Butantã, São Paulo - SP' }, // [5]

    { id: 15, nome: 'Horta CAIC I', localizacao: [-23.4441, -51.8731], descricao: 'Endereço: Rua Emílio Ângelo Panosol, frente ao 351, Centro, Sarandi - PR' },
    { id: 16, nome: 'Horta CAIC II', localizacao: [-23.4441, -51.8735], descricao: 'Endereço: Rua Emílio Ângelo Panosol, frente ao 407, Centro, Sarandi - PR' },
    { id: 17, nome: 'Horta Monte Rey', localizacao: [-23.4270, -51.8902], descricao: 'Endereço: Rua Pioneiro Francisco Brogio, frente ao 1675, Jardim Monte Rey, Sarandi - PR' },
    { id: 18, nome: 'Horta José Richa', localizacao: [-23.4342, -51.8687], descricao: 'Endereço: Av. Mafalda Guise Negri, 1824, Residencial Governador José Richa, Sarandi - PR' },
    { id: 19, nome: 'Horta Ana Elisa', localizacao: [-23.4372, -51.8649], descricao: 'Endereço: Rua Barão de Mauá, frente ao 1084, Jardim Ana Elisa, Sarandi - PR' },
    { id: 20, nome: 'Horta Nova Aliança I', localizacao: [-23.4355, -51.8669], descricao: 'Endereço: Av. Amazonas, frente ao 73, Jardim Nova Aliança, Sarandi - PR' },
    { id: 21, nome: 'Horta Nova Aliança II', localizacao: [-23.4360, -51.8673], descricao: 'Endereço: Av. Amazonas, frente ao 215, Jardim Nova Aliança, Sarandi - PR' },
    { id: 22, nome: 'Horta Menino Jesus', localizacao: [-23.4412, -51.8662], descricao: 'Endereço: Rua Antônia Garrido Stevanelli, ao lado do 366, Jardim Nova Paulista, Sarandi - PR' },
    { id: 23, nome: 'Horta Mauá', localizacao: [-23.4402, -51.8702], descricao: 'Endereço: Av. Silvério, frente ao 530, Conjunto Residencial Mauá, Sarandi - PR' },
    { id: 24, nome: 'Horta São José', localizacao: [-23.4470, -51.8695], descricao: 'Endereço: Av. Brasil, 2418, Residencial São José, Sarandi - PR' },
  

    { id: 25, nome: 'Horta de Manguinhos', localizacao: [-22.879, -43.241], descricao: 'Endereço: Av. Dom Hélder Câmara, 1184, Benfica, Rio de Janeiro - RJ' },
    { id: 26, nome: 'Hortas Comunitárias de Sete Lagoas', localizacao: [-19.466, -44.246], descricao: 'Endereço: Rua José Maria dos Mares Guia, 100, Centro, Sete Lagoas - MG' },
    { id: 27, nome: 'Horta da Lomba do Pinheiro', localizacao: [-30.097, -51.128], descricao: 'Endereço: Estrada João de Oliveira Remião, 7850, Lomba do Pinheiro, Porto Alegre - RS' },
    { id: 28, nome: 'Horta Comunitária da Asa Sul', localizacao: [-15.799, -47.894], descricao: 'Endereço: CLS 414, Bloco D, Asa Sul, Brasília - DF' },
    { id: 29, nome: 'Horta City Lixo Zero', localizacao: [-3.718, -38.543], descricao: 'Endereço: Av. Washington Soares, 55, Edson Queiroz, Fortaleza - CE' },
    { id: 30, nome: 'Horta Agroecológica do MST', localizacao: [-12.977, -38.501], descricao: 'Endereço: Loteamento Santa Monica, S/N, São Marcos, Salvador - BA' },
    { id: 31, nome: 'Horta Comunitária do Gama', localizacao: [-16.023, -48.065], descricao: 'Endereço: Quadra 34, Conjunto B, Setor Leste, Gama - DF' },
    { id: 32, nome: 'Horta Viva Belém', localizacao: [-1.459, -48.504], descricao: 'Endereço: Tv. Padre Eutíquio, 1255, Batista Campos, Belém - PA' },
    { id: 33, nome: 'Horta de Curitiba', localizacao: [-25.428, -49.267], descricao: 'Endereço: Av. Cândido Hartmann, S/N, Bigorrilho (Parque Barigui), Curitiba - PR' },
    { id: 34, nome: 'Horta do Parque Ecológico', localizacao: [-15.593, -56.104], descricao: 'Endereço: Av. Miguel Sutil, 8000, Jardim Aquários, Cuiabá - MT' },
    { id: 35, nome: 'Horta Comunitária de Recife', localizacao: [-8.061, -34.871], descricao: 'Endereço: Rua da Aurora, 125, Boa Vista, Recife - PE' }
  ];
  

  return (
    <Container fluid className={styles.containerFluid}>
        <div className={styles.bannerTop}>
            <p className={`${styles.bannerText}`}>Hortas Comunitárias pelo</p>
            <span className={styles.bannerTextSpan}>Brasil</span>
        </div>

      <Row className="justify-content-center align-content-center mt-5 mb-5">
        <Col xs={12} md={10} lg={8} className={styles.mapContainer}>
          <MapContainer
            center={[-15.7797, -47.9297]}
            zoom={4}
            scrollWheelZoom={false}
            className={styles.leafletContainer}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {hortas.map((horta) => (
              <Marker
                key={horta.id}
                position={horta.localizacao}
                icon={gardenIcon}
                eventHandlers={{
                  click: () => setSelectedHorta(horta),
                }}
              />
            ))}

            {selectedHorta && (
              <Popup
                position={selectedHorta.localizacao}
                onClose={() => setSelectedHorta(null)}
              >
                <div className={styles.popup}>
                  <h5>{selectedHorta.nome}</h5>
                  <p>{selectedHorta.descricao}</p>
                  <button
                    className={`${styles.registerFormBtn} w-100`}
                    onClick={() => setSelectedHorta(null)}
                  >
                    Fechar
                  </button>
                </div>
              </Popup>
            )}
          </MapContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Mapa;
