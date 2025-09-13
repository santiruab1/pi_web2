import { NextRequest, NextResponse } from 'next/server';

// GET /api/products
export async function GET(request: NextRequest) {
  try {
    // Lógica para obtener productos
    const products = [
      { id: 1, name: 'Producto 1', price: 100, category: 'Electrónicos' },
      { id: 2, name: 'Producto 2', price: 200, category: 'Ropa' },
    ];
    
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener productos' },
      { status: 500 }
    );
  }
}

// POST /api/products
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Lógica para crear un nuevo producto
    
    return NextResponse.json(
      { message: 'Producto creado exitosamente', product: body },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear producto' },
      { status: 500 }
    );
  }
}
