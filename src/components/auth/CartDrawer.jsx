import React from 'react';
import { X, Trash2, ArrowRight, ShoppingBag, Check } from 'lucide-react';

export const CartDrawer = ({ isOpen, onClose, cartItems, onRemoveItem, onCheckout }) => {
  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-drawer-header">
          <div className="cart-header-title">
            <ShoppingBag size={20} color="#1456fd" />
            <h3>Your Course Cart ({cartItems.length})</h3>
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <ShoppingBag size={48} color="#94a3b8" />
              <p>Your cart is empty.</p>
              <button className="browse-courses-btn" onClick={onClose}>
                Browse Courses
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-row">
                  <img src={item.image} alt={item.title} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h4 className="cart-item-title">{item.title}</h4>
                    <span className="cart-item-instructor">{item.instructor}</span>
                    <span className="cart-item-price">${item.price}</span>
                  </div>
                  <button 
                    className="cart-remove-btn"
                    onClick={() => onRemoveItem(item.id)}
                    title="Remove from cart"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-total-row">
              <span>Total:</span>
              <span className="cart-total-amount">${total.toFixed(2)}</span>
            </div>
            <p className="cart-guarantee-note">
              <Check size={14} color="#16a34a" /> 30-Day Money-Back Guarantee
            </p>
            <button className="cart-checkout-btn" onClick={onCheckout}>
              <span>Proceed to Checkout</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
