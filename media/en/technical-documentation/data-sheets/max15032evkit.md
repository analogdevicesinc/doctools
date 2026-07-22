<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX15032 Evaluation Kit

## General Description

Features

The MAX15032 evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  circuit  board  that  contains the  MAX15032  pulse-width-modulated  (PWM)  step-up DC-DC converter. The EV kit is configured to operate with a 500kHz switching frequency. It operates from a 2.9V to 5.5V DC supply voltage, is configured for a 30V output, and has an output power capability up to 600mW with a 2.9V input.

- S 2.9V to 5.5V Input Range
- S 30V Output Voltage
- S 500kHz Switching Frequency
- S 0.5µA IC Shutdown Current
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX15032EVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                            |
|---------------|-------|--------------------------------------------------------------------------------------------------------|
| C1            |     1 | 1 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C105K                                    |
| C2            |     1 | 10 F F Q 10%, 16V X7R ceramic capacitor (1210) Murata GRM32DR71C106K                                   |
| C3, C4        |     2 | 2.2 F F Q 10% , 100V X7R ceramic capacitors (1210) Murata GRM32ER72A225K                               |
| C5            |     1 | 0.01 F F Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H103K                                 |
| D1            |     1 | 1A, 40V Schottky barrier diode Diodes Inc. B140-13-F (SMA) Fairchild SS14 (SMA) STMicro STPS140A (SMA) |

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| JU1           |     1 | 3-pin header (0.1in center)                                                      |
| L1            |     1 | 4.7 F H inductor TDK SLF7045T-4R7M2R0-PF Sumida CDRH5D28RHPNP- 4R7NC (6mm x 6mm) |
| R1            |     1 | 143k I Q 1% resistor (0603)                                                      |
| R2            |     1 | 6.19k I Q 1% resistor (0603)                                                     |
| R3            |     1 | 10 I Q 1% resistor (0603)                                                        |
| TP1, TP2      |     2 | Miniature test points, red                                                       |
| U1            |     1 | PWM step-up DC-DC converter (8 TDFN-EP*) Maxim MAX15032ATA+                      |
| -             |     1 | Shunt                                                                            |
| -             |     1 | PCB: MAX15032 EVALUATION KIT+                                                    |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| STMicroelectronics                     | 408-452-8585 | www.us.st.com               |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX15032 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15032 Evaluation Kit

## Quick Start

## Recommended Equipment

## Input Voltage Range

The  EV  kit  can  be  operated  with  a  2.9V  to  5.5V  input voltage range or a 5.5V to 11V input voltage range. By default,  the  EV  kit  is  configured  to  operate  with  a  2.9V to  5.5V  input  voltage  range.  To  operate  the  EV  kit  in the 5.5V to 11V input range, the following configuration changes should be made:

- Remove capacitor C5 (0.01 F F).
- Connect the CP pin (U1, pin 7) to VIN.
- Leave the CN pin (U1, pin 6) unconnected.

## Output Voltages

The  EV  kit  is  configured  to  provide  a  30V  output  voltage. However, the output voltage can be adjusted from (VIN + 1V) to 36V by selecting appropriate R1 and R2 values. Select R2 in the 6k I to 10k I range. R1 is then given by:

<!-- formula-not-decoded -->

where VFB = 1.245V. For significantly different operation points, the EV kit may require a different inductor. Refer to  the  MAX15032  IC  data  sheet  for  proper  component selection.

## Shutdown Mode ( SHDN )

The  EV  kit  features  a  shutdown  mode  that  reduces the  device's  quiescent  current  to  0.5 F A.  Jumper  JU1 selects the shutdown mode. See Table 1 for jumper JU1 functions.

## Table 1. Jumper JU1 Functions

| SHUNT POSITION   | SHDN PIN         | MAX15032 OUTPUT                      |
|------------------|------------------|--------------------------------------|
| 1-2              | Connected to VIN | Device enabled (V OUT = 30V)         |
| 2-3              | Connected to GND | Shutdown mode (V OUT = V IN - V D1 ) |

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1) Verify that a shunt is placed across pins 1-2 of jumper JU1 to enable the device.
- 2) Connect the positive terminal of the DC power supply to the VIN pad. Connect the negative terminal of the DC power supply to the adjacent PGND pad.
- 3) Connect  the  voltmeter  across  the  VOUT  and  GND pads.
- 4) Turn on the 2.9V to 5.5V DC power supply and verify that the output is 30V.

## Detailed Description

The MAX15032 EV kit contains a high-efficiency pulsewidth-modulated (PWM) step-up DC-DC converter. The MAX15032  features  an  adjustable  output  voltage  and an  internal  MOSFET  switch  to  achieve  a  fast  transient response. The EV kit operates from a 2.9V to 5.5V DC power  supply  and  provides  a  regulated  30V  output, and has a 600mW output capability from a 2.9V input. The  EV  kit  is  configured  for  a  2.9V  to  5.5V  input,  30V output, and operates with a 500kHz switching frequency. Operation at a different input voltage or output voltage may require changes to the EV kit configuration. Refer to the MAX15032 IC data sheet for detailed information on device operation.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- MAX15032 EV kit
- 2.9V to 5.5V, 100mA DC power supply (VIN)
- Voltmeter

## MAX15032 Evaluation Kit

Figure 1. MAX15032 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX15032 Evaluation Kit

<!-- image -->

Figure 2. MAX15032 EV Kit Component Placement GuideComponent Side

Figure 3. MAX15032 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX15032 EV Kit PCB Layout-Solder Side

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX15032 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.