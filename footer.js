document.write(`
    <style>
      @media (max-width: 640px) {
        footer {
          padding-top: 16px !important;
          padding-bottom: 8px !important;
        }

        footer .max-w-container-max.mx-auto.grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 8px !important;
        }

        footer .max-w-container-max.mx-auto.grid > div:first-child {
          grid-column: span 2 !important;
        }

        footer .flex.items-center.mb-md {
          margin-bottom: 4px !important;
        }

        footer h4 {
          margin-bottom: 4px !important;
          font-size: 0.8rem !important;
        }

        footer .font-headline-md.text-headline-md.font-bold {
          font-size: 0.85rem !important;
        }

        footer p.mb-md {
          margin-bottom: 6px !important;
          line-height: 1.2 !important;
        }

        footer .mt-xl {
          margin-top: 12px !important;
          padding-top: 8px !important;
        }

        footer .space-y-sm > li {
          margin-top: 2px !important;
        }

        footer .font-body-sm,
        footer .text-body-sm {
          font-size: 0.7rem !important;
          line-height: 1.15 !important;
        }
      }
    </style>
    <footer class="bg-primary text-on-primary py-xl px-md">
      <div class="max-w-container-max mx-auto grid md:grid-cols-3 gap-xl">
        <div>
          <div class="flex items-center gap-sm mb-md">
            <img
              alt="World Fine Bio Chemicals logo"
              class="w-10 h-10 rounded-full object-cover shrink-0"
              src="image.png"
            />
            <span class="font-headline-md text-headline-md font-bold">World Fine Bio Chemicals</span>
          </div>
          <p class="font-body-sm text-body-sm text-on-primary/80 mb-md">
            Pioneering sustainable bio-solutions for modern agriculture.
            Committed to quality, innovation, and ecological harmony since 2005.
          </p>
        </div>
        <div>
          <h4 class="font-headline-md text-body-lg font-bold mb-md text-secondary">Quick Links</h4>
          <ul class="space-y-sm">
            <li><a class="font-body-sm text-body-sm text-on-primary/80 hover:text-white transition-colors" href="#">About Us</a></li>
            <li><a class="font-body-sm text-body-sm text-on-primary/80 hover:text-white transition-colors" href="#">Our Products</a></li>
            <li><a class="font-body-sm text-body-sm text-on-primary/80 hover:text-white transition-colors" href="#">Certifications</a></li>
            <li><a class="font-body-sm text-body-sm text-on-primary/80 hover:text-white transition-colors" href="#">Sustainability Report</a></li>
            <li><a class="font-body-sm text-body-sm text-on-primary/80 hover:text-white transition-colors" href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-headline-md text-body-lg font-bold mb-md text-secondary">Legal</h4>
          <ul class="space-y-sm">
            <li><a class="font-body-sm text-body-sm text-on-primary/80 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
            <li><a class="font-body-sm text-body-sm text-on-primary/80 hover:text-white transition-colors" href="#">Terms of Service</a></li>
            <li><a class="font-body-sm text-body-sm text-on-primary/80 hover:text-white transition-colors" href="#">Return Policy</a></li>
            <li><a class="font-body-sm text-body-sm text-on-primary/80 hover:text-white transition-colors" href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="max-w-container-max mx-auto mt-xl pt-lg border-t border-on-primary/20 text-center">
        <p class="font-body-sm text-body-sm text-on-primary/60">
          © 2024 World Fine Bio Chemicals. All rights reserved.
        </p>
      </div>
    </footer>
`);
