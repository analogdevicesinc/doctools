<!-- lastmod 2022-08-02 -->
## MAX20028 Evaluation Kit

## General Description

The MAX20028 evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  PCB  that  contains  all  the components  necessary  to  evaluate  the  MAX20028 power-management IC (PMIC). The EV kit includes one high-voltage  step-down  controller  and  two  low-voltage step-down converters.

The EV kit can operate from 3.5V to 36V input voltages and is optimized for automotive infotainment applications. The high-voltage controller is configured for a 5V output that  provides  at  least  5A.  The  low-voltage  step-down converters are configured for 3.3V and 1.2V, each providing  up  to  3A.  The  EV  kit  can  be  easily  reconfigured  to operate in continuous PWM mode, skip mode, or external synchronization operation.

The  EV  kit  comes  with  MAX20028ATJA/VY+  device installed, but is capable of evaluating other variants of the MAX20028 IC. Refer to the MAX20028 IC data sheet for external component selection.

Evaluates: MAX20028

## Features

- 3.5V	to	36V	Input	Range
- 20µA Quiescent Current with DC-DC Controller Enabled
- Output Voltages
- 5V Output at 5A (High-Voltage, Step-Down Controller, Buck 1)
- 3.3V Output at 3A (Step-Down Converter, Buck 2)
- 1.2V Output at 3A (Step-Down Converter, Buck 3)
- High-Frequency Operation
- 2.1MHz or Optional Divide-Down Operation for Buck 1
- Individual Enable Inputs and Reset Outputs
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## Quick Start

## Recommended Equipment

- MAX20028	EV	kit
- 3.5V	to	36V,	4A	DC	power	supply
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Verify  that  a  shunt  is  installed  across  pins  1-2  on jumpers JU1-JU3 and JU5-JU7.
- 2)  Verify  that  a  shunt  is  installed  across  pins  2-3  on jumper	JU4.
- 3)  Connect the positive terminal of the power supply to the VBAT PCB pad. Connect the negative terminal of the power supply to the PGND PCB pads closest to VBAT.
- 4)  Set	the	power-supply	VIN	to	14V.
- 5)  Turn on the power supply and verify that the Buck 1 output (VOUT1) is 5V.
- 6)  Verify that the Buck 2 output (VOUT2) is 3.3V.
- 7)  Verify that the Buck 3 output (VOUT3) is 1.2V.

## Detailed Description of Hardware

The  MAX20028  EV  kit  comes  fully  assembled  and tested  with  all  the  components  necessary  to  evaluate the  MAX20028  step-down  controller  with  dual  2.1MHz step-down  DC-DC  converters.  The  EV  kit  comes  with a  MAX20028ATJA/VY+  32-pin  side-wettable  TQFN-EP device  installed.  However,  other  MAX20028  variants can be evaluated on the same EV kit with some simple modifications. Refer to the MAX20028 IC data sheet for additional  information  regarding  component  selection when altering the EV kit.

## High-Voltage Controller, Buck 1

Buck 1 is a high-voltage, step-down controller designed to operate with a 3.5V to 36V input voltage range. Buck 1 is configured for a 5V output and up to 5A load current. To change the Buck 1 output voltage to a fixed 3.3V, remove R7	and	populate	R6	with	a	0Ω	resistor.

The  Buck  1  switching  frequency  can  be  configured  for 2.1MHz or the factory-trimmed divide-down frequency of

## Evaluates: MAX20028

420kHz.	 By	 default,	 Buck	 1	 is	 configured	 to	 operate	 at 2.1MHz.  To  change  the  Buck  1  switching  frequency  to 420kHz,	remove	R22	and	populate	R21	with	a	0Ω	resistor. The switching frequencies of Buck 2 and Buck 3 are not affected  by  the  CSEL1  input.  For  additional  information, refer  to  the Buck 1 Clock Select (CSEL1) section  in  the MAX20028 IC data sheet.

## Low-Voltage Converters, Buck 2 and Buck 3

Buck 2 and Buck 3 are low-voltage, synchronous stepdown  converters  designed  to  operate  directly  from  the Buck  1  output.  Buck  2  is  configured  for  a  3.3V  output and Buck 3 is configured for a 1.2V output. Both Buck 2 and Buck 3 have a maximum output current of 3A. The output voltages are configurable between 0.8V and 3.6V by resistor-dividers. Refer to the OUT2/OUT3 Adjustable Output-Voltage Option section in the MAX20028 IC data sheet for additional information.

## Spread-Spectrum Operation (JU4)

The  EV  kit  features  a  pin-selectable  spread-spectrum mode	 of	 operation.	 Jumper	 JU4	 enables	 or	 disables spread-spectrum operation (see Table 1).

## Synchronization Input (JU5)

The  EV  kit's  SYNC  input  allows  synchronization  to  an external  clock.  When  synchronizing  the  device  to  an external clock, leave jumper JU5 unconnected. For fixedfrequency PWM mode operation, connect a shunt across pins  1-2  on  JU5.  For  skip  mode  operation,  connect  a shunt across pins 2-3 on JU5.

## Reset Outputs

The EV kit features individual RESET\_ outputs for each buck  that  assert  low  when  the  buck  output  drops  6% below  the  regulated  voltage. RESET\_ remains  low  for a  fixed  timeout  period  of  3.9ms  after  the  buck  output rises  up  to  its  regulated  voltage. RESET1 has  a  pullup resistor,  making  it  a  logic-level  output. RESET2 and RESET3 are  either  logic-level  or  open-drain  outputs, depending on jumpers JU6 and JU7 (see Table 1).

## Thermal Warning

The  EV  kit  features  a  thermal-warning  indicator  output. The ERR output asserts low when the junction temperature	on	the	IC	exceeds	+145°C	(typ).	The	thermal-warning indicator	has	a	typical	hysteresis	of	15°C.

## Table 1. Jumper Descriptions (JU1-JU7)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                      |
|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects EN1 to VBAT through a pullup resistor (normal operation).                                                                                                               |
| JU1      | 2-3              | Connects EN1 to PGND (shutdown).                                                                                                                                                 |
| JU2      | 1-2*             | Connects EN2 to BIAS (Buck 2 enabled).                                                                                                                                           |
| JU2      | 2-3              | Connects EN2 to PGND (Buck 2 disabled).                                                                                                                                          |
| JU3      | 1-2*             | Connects EN3 to BIAS (Buck 3 enabled).                                                                                                                                           |
| JU3      | 2-3              | Connects EN3 to PGND (Buck 3 disabled).                                                                                                                                          |
| JU4      | 1-2              | Connects SSEN to BIAS, enabling spread-spectrum operation.                                                                                                                       |
| JU4      | 2-3*             | Connects SSEN to PGND, disabling spread-spectrum operation.                                                                                                                      |
| JU5      | 1-2*             | Connects SYNC to BIAS to enable continuous PWM mode.                                                                                                                             |
| JU5      | 2-3              | Connects SYNC to PGND to enable skip mode under light-load conditions.                                                                                                           |
| JU5      | Open             | When SYNC is unconnected, or when a clock source is present, continuous PWM mode is enabled. SYNC can be used to synchronize with other supplies when a clock source is present. |
| JU6      | Closed*          | Connects RESET2 to VOUT1 through a pullup resistor, making the RESET2 output a logic level signal.                                                                               |
| JU6      | Open             | Disconnects RESET2 from VOUT1, leaving RESET2 as an open-drain output.                                                                                                           |
| JU7      | Closed*          | Connects RESET3 to VOUT1 through a pullup resistor, making RESET3 output a logic level signal.                                                                                   |
| JU7      | Open             | Disconnects RESET3 from VOUT1, leaving RESET3 as an open-drain output.                                                                                                           |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corp.                              | 864-967-2150 | www.avx.com                 |
| Coilcraft Inc.                         | 847-639-6400 | www.coilcraft.com           |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| NXP Semiconductors                     | 408-474-8142 | www.nxp.com                 |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay Dale                            | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX20028 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20028EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX20028

│

## MAX20028 Evaluation Kit

## MAX20028 EV Kit Bill of Materials

| DESIGNATION         |   QTY | DESCRIPTION                                                                                     |
|---------------------|-------|-------------------------------------------------------------------------------------------------|
| C1                  |     1 | 2.2uF 10%, 50V X7R ceramic capacitor (0805), TDK C2012X7R1H225K                                 |
| C2                  |     1 | 1uF 10%, 50V X7R ceramic capacitor (0805), TDK C2012X7R1H105K                                   |
| C3, C4, C6, C7, C16 |     5 | 0.1uF 10%, 50V X7R ceramic capacitor (0603), MURATA GCM188R71H104K                              |
| C5                  |     1 | 220uF 20%, 50V aluminum electrolytic capacitor (Case size H13), Panasonic EEV-TG1H221Q          |
| C9-C12              |     4 | 47uF 20%, 10V X7R ceramic capacitor (1210), Murata GRM32ER71A476K                               |
| C13                 |     0 | Not installed, ceramic capacitor (0402)                                                         |
| C14                 |     1 | 120pF 10% 50V ceramic capacitor (0402), AVX 04025C121KAT2A                                      |
| C15                 |     1 | 1.5nF 10% 50V ceramic capacitor (0402), TDK C1005X7R1H152K                                      |
| C17                 |     1 | 1uF 10%, 16V X7R ceramic capacitor (0603), MURATA GCM188R71C105K                                |
| C18, C22            |     2 | 10uF 10%, 6.3V X7R ceramic capacitor (0805), MURATA GCM21BR70J106K                              |
| C19, C20, C23, C24  |     4 | 47uF 10%, 6.3V X7R ceramic capacitor (1210), MURATA GRM32ER70J476KE20L                          |
| C21                 |     1 | 20pF 50V C0G ceramic capacitor (0402), MURATA GRM1555C1H200J                                    |
| C25                 |     1 | 10pF 50V C0G ceramic capacitor (0402), MURATA GRM1555C1H100J                                    |
| C27                 |     1 | 4.7uF 10%, 50V X7R ceramic capacitor (1210), MURATA GCM32ER71H475K                              |
| D1                  |     1 | switching diode SOD-323, Diodes inc. 1N4148WS                                                   |
| D2                  |     1 | 5A low VF MEGA Schottky barrier rectifier, NXP PMEG3050EP                                       |
| FB1                 |     1 | Ferrite Bead, 60 ohm, 600mA, Murata BLM41PG600SH1                                               |
| FB2, FB3            |     2 | Not installed, ferrite beads, short (PCB trace)                                                 |
| JU1-JU5             |     5 | 3 pin header, 2.54MM,                                                                           |
| JU6, JU7            |     2 | 2 pin header, 2.54MM,                                                                           |
| L1                  |     1 | 1.2uH, 12.5A inductor, Coilcraft XAL5030-122ME                                                  |
| L2                  |     1 | 1.0µH, 8.7A inductor, Coilcraft XAL4020-102ME                                                   |
| L3                  |     1 | 0.6µH, 10.4A inductor, Coilcraft XAL4020-601ME                                                  |
| N1, N2              |     2 | 40V, 18A, 26m ohm N-Channel Power Trench MOSFET, Fairchild FDMC8015L                            |
| R1-R4, R7, R20, R22 |     7 | 0 ohm, +/-5% resistors (0402)                                                                   |
| R5, R6, R21         |     0 | Not installed, resistors (0402)                                                                 |
| R8                  |     1 | 22k ohm 1% (0402), Panasonic ERJ-2RKF2202X                                                      |
| R9-R11, R13         |     4 | 5.1k ohm, 5% tolerance (0402)                                                                   |
| R12, R14            |     2 | 100k ohm, 5% tolerance (0603)                                                                   |
| R15                 |     1 | 10 ohm, 1% tolerance (0402)                                                                     |
| R16                 |     1 | 10k ohm, 1% tolerance (0402)                                                                    |
| R17                 |     1 | 20k ohm, 1% tolerance (0402)                                                                    |
| R18                 |     1 | 75k ohm, 1% tolerance (0402)                                                                    |
| R19                 |     1 | 24k ohm, 1% tolerance (0402)                                                                    |
| RCS                 |     1 | 15m ohm, 1W, 1% (1206), Vishay Dale WSL1206R0150FEA                                             |
| TP1-TP3             |     3 | PCB Miniature test points                                                                       |
| U1                  |     1 | Step-Down Controller with Dual 2.1MHz Step-Down DC-DC Converters (32 TQFN-EP), MAX20028ATJA/VY+ |
| -                   |     7 | Shunts                                                                                          |
| -                   |     1 | PCB: MAX20028 EVKIT                                                                             |

Evaluates: MAX20028

## MAX20028 EV Kit Schematic

Evaluates: MAX20028

<!-- image -->

## MAX20028 EV Kit PCB Layout

MAX20028 EV Kit Component Placement Guide-Component Side

<!-- image -->

MAX20028 EV Kit PCB Layout-Component Side

<!-- image -->

MAX20028 EV Kit PCB Layout-Layer 2

<!-- image -->

│

## MAX20028 EV Kit PCB Layout (continued)

MAX20028 EV Kit PCB Layout-Layer 3

<!-- image -->

MAX20028 EV Kit PCB Layout-Solder Side

<!-- image -->

MAX20028 EV Kit Component Placement Guide-Solder Side

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                     | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 7/18            | Initial release                                                                                                                                 | -               |
|                 1 | 2/19            | Updated part number MAX20028AGJA/VY+ to MAX20028ATJA/VY+ in General Description, Detailed Description of Hardware, and EV Kit Bill of Materials | 1, 2, 4         |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

│

Evaluates: MAX20028