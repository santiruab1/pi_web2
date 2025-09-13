import { NextRequest, NextResponse } from 'next/server';

// GET /api/users
export async function GET(request: NextRequest) {
  try {
    // Lógica para obtener usuarios
    const users = [
      { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
      { id: 2, name: 'María García', email: 'maria@example.com' },
    ];
    
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener usuarios' },
      { status: 500 }
    );
  }
}

// POST /api/users
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Lógica para crear un nuevo usuario
    
    return NextResponse.json(
      { message: 'Usuario creado exitosamente', user: body },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear usuario' },
      { status: 500 }
    );
  }
}
