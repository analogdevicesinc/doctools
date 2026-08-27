<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX749 LCD bias supply produces a variable negative output voltage when powered by a +3V to +5V supply. The MAX749 evaluation kit (EV kit) has a -8.0V to  -23.6V  adjustable output voltage. This is the typical range for driving the backplane of a liquid crystal display (LCD).

Two pushbutton switches, located on the EV kit's printed circuit board, control the output voltage. One switch connects to the CTRL pin and the other to the ADJ pin. Logic signals from an external controller may be connected to the board for optional output voltage control.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C1            |     1 | 0.001µF surface-mount capacitor                                           |
| C2            |     1 | 15µF, 35V surface-mount tantalum capac- itor. Sprague 595D 156 X0 035 D7. |
| C3            |     1 | 15µF, 10V surface-mount tantalum capac- itor. Sprague 595D 156 X0 010 C7. |
| C4            |     1 | 0.1µF, 50V surface-mount capacitor                                        |
| C5, C6        |     2 | 0.01µF, 50V surface-mount capacitors                                      |
| D1            |     1 | 1N5819 surface-mount diode. Nihon EC10QS04.                               |
| L1            |     1 | 47µH inductor. Sumida CD54-470N.                                          |
| Q1            |     1 | ZTX750 PNP switching transistor. Zetex ZTX750M1 (surface-mount).          |
| R1, R2        |     2 | 100k Ω , 5% surface-mount resistors                                       |
| R3            |     1 | 0.20 Ω , 5% surface-mount resistor. IRC LR2010-01-R200-J.                 |
| R4            |     1 | 470 Ω , 5% surface-mount resistor                                         |
| R5            |     1 | 1.2M Ω , 5% surface-mount resistor                                        |
| SW1, SW2      |     2 | Pushbutton switches                                                       |
| U1            |     1 | MAX749CSA                                                                 |
| None          |     1 | Printed circuit board                                                     |
| None          |     1 | MAX749 data sheet                                                         |

See Table 2 of the MAX749 data sheet for phone and fax numbers of component suppliers.

## MAX749 Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 2.7V to 6V Input Voltage
- ' -8.0V to -23.6V Adjustable Output Voltage
- ' 40mA Output Current with +5V Input 15mA Output Current with +3V Input
- ' Easy Interface to µP
- ' Pushbutton Control of Output Voltage

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | BOARD TYPE    |
|----------------|---------------|---------------|
| MAX749EVKIT-SO | 0°C to +70°C  | Surface-Mount |

<!-- image -->

## MAX749 Evaluation Kit

Figure 1.  MAX749 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quick Start

The MAX749 EV kit is easy to connect and use. Follow these steps for making connections to the printed circuit board and changing the output voltage.

## Do not turn on the power supply until all connections are completed.

- 1)  Connect a +3V to +6V supply to the pad marked V CC on the printed circuit board. The ground connects to a pad marked GND.
- 2)  Connect a voltmeter and load (if any) to the V OUT pad.
- 3)  Turn on the power and verify that the output voltage is -16V.
- 4)  Press the ADJ button several times to observe the output voltage changing.
- 5)  Press the CTRL button and verify that the output returns to -16V.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Input Source

The MAX749 EV kit works with supply voltages of 3V to 5V. It delivers at least 40mA at -23.6V with a 5V input. With a 3V input, the maximum output current drops to 15mA. Under full load (40mA at -23.6V), the kit will draw approximately 240mA from a 5V input supply. The following equations show how this figure was determined:

| 1)   | Input Power =   | Output Power Efficiency   |
|------|-----------------|---------------------------|
|      | Input Power =   | 23.6V x 40mA 80%          |
|      | Input Power =   | 1.18W                     |
| 2)   | Input Current = | Input Power Input Voltage |
|      | Input Current = | 1.18W 5V                  |
|      | Input Current = | 236mA                     |

The input supply should be capable of greater than 300mA to cover the range of normal operating conditions.

## Output Voltage Setting

The value of the feedback resistor (R5) and the input current of the feedback pin (FB) determine the output voltage range of the MAX749 EV kit. The MAX749 sets the feedback current to a mid-scale value of 13.3µA whenever the CTRL pushbutton switch is pressed and released. Since R5 is 1.2M Ω , the mid-scale output voltage is set at -16.0V (13.33µA x 1.2M Ω ). The output voltage changes by -0.24V for the next 31 pushes on the ADJ button. The 32nd push on the ADJ button causes the output voltage to change to its minimum value of

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. Using a Potentiometer to Vary the Output Voltage

<!-- image -->

-8V. See the MAX749 data sheet for a full description of CTRL pin and ADJ pin operation.

Using pushbutton switches with only a capacitor for debouncing is economical, but is not recommended. The device may occasionally false step because of switch bounce.

## The External Transistor

The standard MAX749 application circuit uses an external P-channel, logic-level MOSFET or a PNP switching transistor.  The transistor switches the high inductor peak currents and isolates the MAX749 from the negative output voltage. The ZTX750 PNP used in the EV kit has a typical beta of 200 at 700mA (the peak inductor current). This beta is higher than average for PNP transistors when operating with high collector currents. The high gain improves the circuit's efficiency. A more costl y  l ogic-level  MOSFET  (such  as  the  Siliconix SMD10P05L) will improve efficiency, but it will also require a 5V power supply. Graphs in the MAX749 data sheet illustrate the conversion efficiency with both types of external switch.

The peak current allowed through the transistor and inductor is determined by the current-sense resistor in series with the transistor's emitter. The MAX749 turns off  the  PNP  whenever the voltage across the resistor exceeds the current-limit threshold (140mV).

The following equation yields the value of the peak

<!-- formula-not-decoded -->

inductor current:

The MAX749 EV kit is configured for a 40mA output current with a 5V supply. The output current drops to 15mA with a 3V supply. For higher output current at 3V,

<!-- image -->

## MAX749 Evaluation Kit

R3 and R4 should be decreased in value to increase the peak inductor current. See the Current-Sense Resistor section of the MAX749 data sheet.

## \_\_\_\_\_\_\_\_\_\_\_Output Filter Capacitors

The output filter capacitor (C2) is a low-value, high-voltage tantalum capacitor. The lower value does allow higher ripple voltage (200mV) when operating with a load;    however,  LCD displays are not affected by the ripple. The output capacitor value may be increased to reduce ripple for other applications.

## Interfacing to Microprocessors

The CTRL and ADJ pins are compatible with the logic levels found in digital systems. They can be driven directly by logic gates or the programmable data pins generally available on microprocessors. Ensure that the logic  levels  applied  to  CTRL  and  ADJ  do  not  exceed V+. To use external CTRL and ADJ signals, connect the source to the indicated pads on the printed circuit board. Capacitors used to debounce the pushbutton switches (C5 and C6) should be removed. The switches do not have to be removed, their presence will not affect circuit operation.

## Modifying the Output Voltage Range

The MAX749 output voltage can also be controlled with an external potentiometer. To connect the potentiometer, remove the feedback resistor (R5) and connect the circuit  of  Figure  2  to  the  pads.  See  the Potentiometer Adjustment section of the MAX749 data sheet to determine values for resistors RA and RB. Be sure the maximum output voltage does not exceed the voltage rating of the output filter capacitor.

Figure 3. MAX749 EV Kit Component Placement Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX749 Evaluation Kit

Figure 4. MAX749 EV Kit Component-Side Layout

<!-- image -->

Figure 5. MAX749 EV Kit Solder-Side Layout

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600
- © 1995 Maxim Integrated Products
- Printed USA