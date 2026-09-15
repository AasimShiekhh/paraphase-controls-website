import { createContext, useContext, useState, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { QuoteForm } from "@/components/QuoteForm";

const QuoteContext = createContext({ openQuote: () => {} });

export const useQuote = () => useContext(QuoteContext);

export const QuoteProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState("");

  const openQuote = useCallback((productName = "") => {
    setProduct(productName);
    setOpen(true);
  }, []);

  return (
    <QuoteContext.Provider value={{ openQuote }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto" data-testid="quote-modal">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-navy-950">Request a Quote</DialogTitle>
            <DialogDescription>
              Tell us your requirement — our team responds with pricing and specifications, usually within one working day.
            </DialogDescription>
          </DialogHeader>
          <QuoteForm key={product} defaultProduct={product} compact testidPrefix="modal-quote" />
        </DialogContent>
      </Dialog>
    </QuoteContext.Provider>
  );
};
