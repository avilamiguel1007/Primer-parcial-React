import './App.css';
import Card from './Components/Card/Card';
import Table from './Components/Table/Table';

function App() {
  return (
    <div className="App">
      <header className="container-cards">
        <Card titulo="Tarjeta 1" valor="Valor 50%" descripcion="Descripción de la tarjeta" />
        <Card titulo="Tarjeta 2" valor="Valor 75%" descripcion="Descripción de la tarjeta 2" />
        <Card titulo="Tarjeta 3" valor="Valor 75%" descripcion="Descripción de la tarjeta 3" />
        <Card titulo="Tarjeta 4" valor="Valor 75%" descripcion="Descripción de la tarjeta 4" />
      </header>
      
      <div className="tables-container">
        
        <Table data={[
          { nombre: 'Juan', apellido: 'Pérez', email: 'juan.perez@example.com', telefono: '555-1234' },
          { nombre: 'María', apellido: 'Gómez', email: 'maria.gomez@example.com', telefono: '555-5678' }
        ]} />

        <Table data={[
          { nombre: 'Carlos', apellido: 'López', email: 'carlos.lopez@example.com', telefono: '555-1234' },
          { nombre: 'Ana', apellido: 'Martínez', email: 'ana.martinez@example.com', telefono: '555-5678' }
        ]} />

        <Table data={[
          { nombre: 'Luis', apellido: 'García', email: 'luis.garcia@example.com', telefono: '555-9876' },
          { nombre: 'Elena', apellido: 'Rodríguez', email: 'elena.rodriguez@example.com', telefono: '555-4321' }
        ]} />

        <Table data={[
          { nombre: 'Pedro', apellido: 'Sánchez', email: 'pedro.sanchez@example.com', telefono: '555-1234' },
          { nombre: 'Laura', apellido: 'Fernández', email: 'laura.fernandez@example.com', telefono: '555-5678' }
        ]} />

      </div>
      
    </div>
  );
}

export default App;