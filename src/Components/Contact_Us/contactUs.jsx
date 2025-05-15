import { useRef, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from '@mui/icons-material/Close';
import './contactUs.css';

export default function ContactUs() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  // Close panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        open &&
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        btnRef.current &&
        !btnRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div>
      <div className="contactUs" id="contactUs">
        <Button
          ref={btnRef}
          className="contactUsBtn"
          onClick={() => setOpen((prev) => !prev)}
          variant="contained"
        >
          Contact Us
        </Button>
      </div>
      <div
        className={`contactUsBody${open ? ' active' : ''}`}
        id="contactUsBody"
        ref={panelRef}
        aria-hidden={!open}
      >
        <div className="contactUsDetails">
          <button
            className="contactUsCloseBtn"
            onClick={() => setOpen(false)}
            aria-label="Close Contact Panel"
            style={{
              background: 'none',
              border: 'none',
              position: 'absolute',
              top: 10,
              right: 10,
              cursor: 'pointer'
            }}
          >
            <CloseIcon fontSize="small" />
          </button>
          <label className="contactUsName">Dr R Nidhya</label>
          <label>Professor, CSE</label>
          <span>
            Madanapalle Institute of Technology & Science <br /> Madanapalle, AP India,
          </span>
          <div className="emailRow">
            <EmailIcon />
            <span>icotl-info@mits.ac.in</span>
          </div>
        </div>
      </div>
    </div>
  );
}