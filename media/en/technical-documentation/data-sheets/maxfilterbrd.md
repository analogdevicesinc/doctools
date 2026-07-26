<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAXFILTERBRD

## Evaluates:  MAX7408-MAX7415/ MAX7418-MAX7425

## General Description

The MAXFILTERBRD is an unpopulated PCB design to evaluate  the  MAX7408-MAX7415/MAX7418-MAX7425 5th-order, lowpass, switched-capacitor filters (SCFs).

Contact the factory for free samples of the pin-compatible  MAX7408-MAX7415/MAX7418-MAX7425  SCFs  to evaluate these devices.

## Part Selection Table

| PART        | OPERATING VOLTAGE   | FILTER TYPE   |
|-------------|---------------------|---------------|
| MAX7408CUA+ | 5V                  | Elliptic      |
| MAX7409CUA+ | 5V                  | Bessel        |
| MAX7410CUA+ | 5V                  | Butterworth   |
| MAX7411CUA+ | 5V                  | Elliptic      |
| MAX7412CUA+ | 3V                  | Elliptic      |
| MAX7413CUA+ | 3V                  | Bessel        |
| MAX7414CUA+ | 3V                  | Butterworth   |
| MAX7415CUA+ | 3V                  | Elliptic      |
| MAX7418CUA+ | 5V                  | Elliptic      |
| MAX7419CUA+ | 5V                  | Bessel        |
| MAX7420CUA+ | 5V                  | Butterworth   |
| MAX7421CUA+ | 5V                  | Elliptic      |
| MAX7422CUA+ | 3V                  | Elliptic      |
| MAX7423CUA+ | 3V                  | Bessel        |
| MAX7424CUA+ | 3V                  | Butterworth   |
| MAX7425CUA+ | 3V                  | Elliptic      |

Note: Contact the factory to order a free sample of any of the SCF parts.

Features

- S CLK Pad for External Clock Frequency
- S Lead(Pb)-Free and RoHS Compliant
- S Proven PCB Layout

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAXFILTERBRD+ | EV Kit |

## Component List (Suggested Components)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                      |
|---------------|-------|--------------------------------------------------------------------------------------------------|
| C1            |     0 | Not installed, 47pF Q 5%, 50V C0G ceramic capacitor (0805) Murata GRM2165C1H470J or similar      |
| C2            |     0 | Not installed, 2200pF Q 5%, 50V C0G ceramic capacitor (0805) Murata GRM2165C1H222J or similar    |
| C3, C4        |     0 | Not installed, 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GCM188R71C104K or similar |
| JU1, JU2      |     0 | Not installed, 2-pin headers- shorted by PC trace                                                |
| R1            |     0 | Not installed, 10k I Q 1% resistor (0805)                                                        |
| U1            |     0 | Not installed, lowpass SCF (8 F MAX M ) See the Part Selection Table                             |
| -             |     1 | PCB: MAXFILTERBRD+                                                                               |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note:

Indicate that you are using the MAXFILTERBRD when contacting this component supplier.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maximintegrated.com.

## MAXFILTERBRD

## Evaluates:  MAX7408-MAX7415/ MAX7418-MAX7425

Figure 1. Filter Evaluation Test Block Diagram

<!-- image -->

## Quick Start

## Required Equipment

-  MAXFILTERBRD
-  Suggested components (see the Component List )
-    5V  or  3V  DC  power  supply  (depending  on  the  IC installed)
-  Function generator (e.g., HP 33120A)
-    2-channel digital oscilloscope (e.g., Tektronix TDS3012)

## Procedure

Caution: Do not turn on power supply until all connections are completed.

- 1)    Install  all  suggested  components  shown  in  the Component List onto the MAXFILTERBRD.
- 2)    If  the  installed  IC  is  the  MAX7408-MAX7411  or MAX7418-MAX7421, connect the positive terminal of

the 5V supply to the VDD pad and the negative terminal of the supply to the GND pad closest to the VDD pad. If the installed IC is the MAX7412-MAX7415 or MAX7422-MAX7425,  connect  the  positive  terminal of  the  3V  supply  to  the  VDD  pad  and  the  negative terminal of the supply to the GND pad closest to the VDD pad (see Figure 1). Set the function generator to 4VP-P max, 2.2V offset (typ), and 1kHz sine wave, and connect the signal to the IN pad.

- 3)    Connect  the  first  channel  of  the  oscilloscope  to  the IN pad.
- 4)    Connect  the  second  channel  of  the  oscilloscope  to the OUT pad.
- 5)    Connect the oscilloscope's ground probe to any GND pads.
- 6)  Turn on the power supply.
- 7)  Verify the output on the OUT pad.

## MAXFILTERBRD

## Evaluates:  MAX7408-MAX7415/ MAX7418-MAX7425

## Detailed Description of Hardware

The MAXFILTERBRD is an unpopulated PCB design to evaluate  the  MAX7408-MAX7415/MAX7418-MAX7425 5th-order, lowpass SCFs.

## Internal Clock

The MAXFILTERBRD uses the internal oscillator when a capacitor is installed on C1. Refer to the corresponding installed IC data sheet.

For  the  MAX7409/MAX7410/MAX7413/MAX7414,  the frequency can be altered using the following formula:

<!-- formula-not-decoded -->

where  k  =  30  x  10 3  and  fOSC  is  the  internal  oscillator frequency.

For the MAX7408/MAX7411/MAX7412/MAX7415, k = 27 x 10 3 .

For the MAX7418/MAX7421/MAX7422/MAX7425, k = 87 x 10 3 .

For the MAX7419/MAX7420/MAX7423/MAX7424, k = 110 x 10 3 .

## External Clock

An external clock that matches the specification of the corresponding  IC  data  sheet  can  be  used  by  cutting the trace of jumper JU2. Drive the CLK pin with a CMOS gate powered from 0 to VDD. Apply the clock signal to the CLK pad.

## Shutdown

The MAXFILTERBRD is configured for normal operation once the desired IC is installed. The desired IC enters shutdown by cutting the trace of jumper JU1 and driving the IC SHDN pin low through the side of the jumper that is still connected to the part.

## MAXFILTERBRD

## Evaluates:  MAX7408-MAX7415/ MAX7418-MAX7425

Figure 2. MAXFILTERBRD Schematic

<!-- image -->

## MAXFILTERBRD

## Evaluates:  MAX7408-MAX7415/ MAX7418-MAX7425

<!-- image -->

Figure 3. MAXFILTERBRD Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAXFILTERBRD Component PCB LayoutComponent Side

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

Figure 5. MAXFILTERBRD PCB Layout-Solder Side

<!-- image -->

Figure 6. MAXFILTERBRD Component Placement GuideSolder Side

<!-- image -->