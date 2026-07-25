<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX731 evaluation kit (EV kit) facilitates assembly and evaluation of Maxim's MAX731 +5V step-up currentmode DC-DC converter.

The EV kit includes all needed components (unassembled) and a printed circuit board.  When completed, the EV kit is a working DC-DC step-up converter with +5V output voltage at 200mA.

Typical full-load efficiencies are 82% to 87%.  The MAX731 uses current-mode pulse-width modulation (PWM) to provide precise output regulation and low subharmonic noise.  Typical no-load supply current is 2mA.

The MAX731 features cycle-by-cycle current limiting, overcurrent limiting, external shutdown, and programmable soft-start protection.

The EV kit components are suitable for through-hole mounting to make construction and evaluation easy. Refer to the MAX731 data sheet for detailed electrical and operating specifications.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIG- NATION    | QTY              | DESCRIPTION                                | DESCRIPTION                                | SOURCE                                                |
|------------------|------------------|--------------------------------------------|--------------------------------------------|-------------------------------------------------------|
| IC1              | 1                | MAX731CPA                                  | MAX731CPA                                  | Maxim                                                 |
| None             | 1                | Printed circuit board                      | Printed circuit board                      | Maxim                                                 |
| C1, C7           | 2                | 0.1µF ceramic capacitors                   | 0.1µF ceramic capacitors                   |                                                       |
| C2, C8           | 2                | 150µF, 25V electrolytic capacitors MAXC001 | 150µF, 25V electrolytic capacitors MAXC001 | Maxim                                                 |
| C3               | 1                | 4.7µF capacitor                            | 4.7µF capacitor                            |                                                       |
| C4, C5, C6       | 3                | 0.15µF ceramic capacitors                  | 0.15µF ceramic capacitors                  |                                                       |
| D1               | 1                | Schottky diode 1N5817                      | Schottky diode 1N5817                      | Motorola                                              |
| R1               | 1                | 1/4W, 5% 10k Ω resistor                    | 1/4W, 5% 10k Ω resistor                    |                                                       |
| J2               | 1                | Jumper                                     | Jumper                                     |                                                       |
| L1               | 1                | 22µH inductor                              |                                            | Sumida RCH-110-220M Coilcraft PCH-27-223 Wilco ITS220 |
| Sumida USA       | Sumida USA       | (708) 956-0666                             | FAX (708) 956-0702                         | FAX (708) 956-0702                                    |
| Sumida Japan     | Sumida Japan     | 03-3607-5111                               | FAX 03-3607-5428                           | FAX 03-3607-5428                                      |
| Coilcraft USA    | Coilcraft USA    | (708) 639-6400                             | FAX (708) 639-1469                         | FAX (708) 639-1469                                    |
| Coilcraft Taiwan | Coilcraft Taiwan | 8862-268-2146                              | FAX 8862-268-2092                          | FAX 8862-268-2092                                     |
| Wilco            | Wilco            | (317) 293-9300                             | FAX (317) 293-9462                         | FAX (317) 293-9462                                    |

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Load Currents Guaranteed to 200mA with No External MOSFET
- ' Step-Up from a 2.0V Input
- ' 170kHz High-Frequency Current-Mode PWM
- ' 82% to 87% Typical Efficiencies at Full Load
- ' Overcurrent and Soft-Start Protection
- ' Shutdown Capability

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE   | BOARD TYPE   |
|-----------------|---------------|--------------|
| MAX731EVKIT-DIP | 0°C to +70°C  | Through Hole |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_EV Kit

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Terminal Description

| TERMINAL NAME   | FUNCTION                                                                                                                       |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------|
| V IN            | Positive Input. Connect to positive teminal of voltage power supply.                                                           |
| SHDN            | SHUTDOWN - active low. Ground to power down; ties to V IN for normal operation. Output power FET is held off when SHDN is low. |
| GND             | Circuit Ground. Connect to negative terminal of input voltage supply. This is also the output voltage negative terminal.       |
| V OUT           | Positive Output. Connect to load.                                                                                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

Call toll free 1-800-998-8800 for free samples or literature.

## MAX731 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Operating Principle

This switch-mode regulator uses a current-mode pulsewidth modulation (PWM) controller as a simple boost regulator to convert an unregulated 2.0V DC voltage to a  higher  output.    The  current-mode  PWM architecture provides cycle-by-cycle current limiting and excellent load-transient response. For detailed description, see the MAX731/MAX752 data sheet.

## \_\_\_\_\_\_\_\_\_\_\_\_\_Assembly Instructions

## CAUTION:  Observe the following safety measures.

1. Do not apply power until all components are installed.
2. Do not solder or work on circuit while power is applied.
3. 3 Never apply more than the maximum supply voltage to VIN.

The EV kit is shipped unassembled.  You will need the following tools for assembly:

1. Long-nose pliers
2. Wire cutters
3. 30W soldering iron and rosin-core solder
4. Hook-up wire (#18-22AWG) for the input and output connections

## CAUTION:  Using a high-wattage soldering iron or acid-core  solder  may  damage  the  board  and components.

Install the components as shown in Figure 1 and solder them in place. Observe polarity on the capacitors, diode, and IC.  Keep all leads short.  Inspect the completed board for cleanliness, shorts, and solder splashes.

A socket may be added for IC1, but it may degrade performance with high load currents.  In general, sockets are not recommended.

The printed circuit board accommodates a variety of inductors.  When installing the inductors, make sure one end is connected on the trace leading to VIN.  The other inductor terminal connects to the same trace as diode D1.

Only one of the jumpers must be installed; install J2 for the MAX731.

Examine the board for parts incorrectly inserted before applying power.  Verify that the electrolytic capacitors' positive terminal aligns with the plus (+) sign on the printed circuit board.  The cathode ban on D1 must be as indicated on the board legend.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Testing

When testing, use an adjustable bench power supply as a source (VIN).  Start with no load, then add a resistive  load  before  connecting  to  the  actual  circuit.    This procedure minimizes the chances of damaging the device and ensures that accurate data is collected in an orderly manner.

The bench power supply should have a 3A to 6A capability,  and  its  current  limiting  should  be  set  to  prevent interaction with the EV kit's peak currents.

The input voltage range is 2.0V to 5.0V. The maximum load current is 200mA.

## Shutdown

The DC-DC converter operates only if SHDN is  connected to VIN.  Even with SHDN grounded, however, there is a DC path from VIN to VOUT, and VOUT will be one diode drop lower than VIN.  This is due to the basic topography of step-up converters, and would be the case even with IC1 removed from the circuit.  Some current (VIN/10k Ω ) also flows from VIN to SHDN , due to R1.

## Internal Reference

The +1.23V bandgap reference supplies up to 100µA at VREF.  A 4.7µF reference bypass capacitor is recommended for the MAX731.

## 2 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1a. EV Kit Schematic

<!-- image -->

Figure 1b. DIP PC Layout, Through-Hole Placement (1X scale)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX 731 Evaluation  Kit

Figure 1c. DIP PC Layout, Component Side (1X scale)

<!-- image -->

Figure 1d. DIP PC Layout, Solder Side (1X scale)

<!-- image -->

3

## MAX731 Evaluation Kit

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600