import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { AdministradorModule } from './administrador/administrador.module';
import { CategoriaModule } from './categoria/categoria.module';
import { BebidasModule } from './bebidas/bebidas.module';
import { DiaCataModule } from './dia-cata/dia-cata.module';
import { InfoHomeModule } from './info-home/info-home.module';
import { ApartadosModule } from './apartados/apartados.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Cambiamos mariadb por mysql para Railway
      host: 'shortline.proxy.rlwy.net',
      port: 26980,
      username: 'root',
      password: 'anxDidpmBeTKcqIBxOrgETqRfiXvrMvC', // <--- ¡OJO AQUÍ!
      database: 'railway', // En Railway la base por defecto se llama 'railway'
      autoLoadEntities: true,
      synchronize: true, // Esto crea las tablas automáticamente si no existen
    }), 
    UsuarioModule, 
    AdministradorModule, 
    CategoriaModule, 
    BebidasModule, 
    DiaCataModule, 
    InfoHomeModule, 
    ApartadosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}