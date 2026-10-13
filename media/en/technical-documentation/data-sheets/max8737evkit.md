<!-- lastmod 2022-08-04 -->
## General Description

The MAX8737 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that evaluates the MAX8737 dual low-voltage linear regulator controller IC and two external MOSFETs to form a dual linear regulator circuit.  The  MAX8737 EV kit outputs are configured to provide 1.5V and 1.05V regulated output voltages with peak loads up to 2A and 3A, respectively.

The MAX8737 EV kit demonstrates the MAX8737 foldback current-limit capabilities. The MAX8737 EV kit provides PC board pads to evaluate the PGOOD feature of the MAX8737 IC. The PGOOD signals can be used as system-reset signals in various applications. The MAX8737 EV kit also demonstrates the output-enable feature of the MAX8737 IC. The MAX8737 low-voltage linear  regulator  controller  is  suitable  for  CPU  powersupply applications in notebook, desktop, and other high-current applications (such as automotive).

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C1            |     0 | Not installed, capacitor (0805)                                   |
| C2, C11       |     2 | 1µF ±10%, 10V X7R ceramic capacitors (0603) TDK C1608X7R1A105K    |
| C3, C6, C7    |     3 | 10µF ±20%, 4V X5R ceramic capacitors (0603) TDK C1608X5R0G106M    |
| C4, C8        |     2 | 220µF ±20%, 6.3V POSCAPs (D4) Sanyo 6TPD220M                      |
| C5            |     1 | 0.1µF ±10%, 10V X5R ceramic capacitor (0402) TDK C1005X5R1A104K   |
| C9            |     1 | 0.22µF ±10%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J224K |
| C10           |     1 | 22µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J226M   |
| JU1, JU2      |     2 | 3-pin headers                                                     |
| N1            |     1 | 30V, 6.7A dual n-channel MOSFET (8-pin SO) Vishay Si4922DY        |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                        |
|---------------|-------|----------------------------------------------------|
| R1, R4        |     2 | 0.020 Ω ±1% resistors (1206) IRC LRCLRF120601R020F |
| R2, R5        |     2 | 10 Ω ±1% resistors (0603)                          |
| R3            |     1 | 374 Ω ±1% resistor (0603)                          |
| R6            |     1 | 162 Ω ±1% resistor (0603)                          |
| R7            |     1 | 27 Ω ±5% resistor (0603)                           |
| R8            |     1 | 33 Ω ±5% resistor (0603)                           |
| R9            |     1 | 102k Ω ±1% resistor (0603)                         |
| R10           |     1 | 90.9k Ω ±1% resistor (0603)                        |
| R11, R12      |     2 | 100k Ω ±5% resistors (0603)                        |
| R13           |     1 | 100k Ω ±1% resistor (0603)                         |
| R14           |     1 | 33.2k Ω ±1% resistor (0603)                        |
| R15, R16      |     0 | Not installed, resistors (0603)                    |
| TP1, TP2      |     2 | Test points (red)                                  |
| U1            |     1 | MAX8737ETE (16-pin thin QFN with EP 4mm x 4mm)     |
| -             |     2 | Shunts (JU1, JU2)                                  |
| -             |     1 | MAX8737 EV kit board                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Features

- ♦ Dual-Regulated Output Voltages 1.5V at Up to 2A (Peak) 1.05V at Up to 3A (Peak)
- ♦ Configurable Output Voltages
- ♦ Configurable Foldback Current Limit
- ♦ Thermal Protection
- ♦ Output Undervoltage Lockout Protection
- ♦ Independent PGOOD Signal for Each Output
- ♦ Tiny 4mm x 4mm, 16-Pin Thin QFN Package
- ♦ Low-Profile, Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE    | IC PACKAGE       |
|--------------|---------------|------------------|
| MAX8737EVKIT | 0°C to +70°C* | 16 Thin QFN-EP** |

## MAX8737 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          | WEBSITE                |
|-------------------------|--------------|--------------|------------------------|
| IRC                     | 361-992-7900 | 361-992-3377 | www.irctt.com          |
| Sanyo Electronic Device | 619-661-6835 | 619-661-1055 | www.sanyodevice.com    |
| TDK                     | 972-580-7777 | 972-550-1309 | www.components.tdk.com |
| Vishay                  | 203-268-6261 | 203-452-5670 | www.vishay.com         |

Note: Indicate that you are using the MAX8737 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 5V power supply (PS1) capable of handling up to 100mA
- 2V ±1% power supply (PS2) capable of handling up to 5mA
- 1.25V power supply (PS3) capable of handling up to 5A
- 1.8V power supply (PS4) capable of handling up to 5A
- Two digital voltmeters (DVM1 and DVM2)

The MAX8737 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supplies until all connections are completed:

- 1) Verify that shunts are installed across pins 1 and 2 of jumpers JU1 and JU2.
- 2) Connect DVM1 across the VOUT1 and GND pads located near capacitor C4.
- 3) Connect DVM2 across the VOUT2 and GND pads located near capacitor C8.
- 4) Connect the PS1 power supply across the VCC and GND pads located near capacitor C1.
- 5) Connect the PS2 power supply across the VREF and GND pads located near capacitor C11.
- 6) Connect the PS3 power supply across the VIN2 and GND pads located near capacitor C8.
- 7) Connect the PS4 power supply across the VIN1 and GND pads located near capacitor C4.
- 8) Turn on the PS1 and PS2 power supplies.
- 9) Turn on the PS3 and PS4 power supplies.
- 10) Verify the DVM1 voltmeter measures 1.50V.
- 11) Verify the DVM2 voltmeter measures 1.05V.

## Detailed Description

The MAX8737 EV kit circuit uses a MAX8737 controller to implement two low-voltage, low-dropout linear regulators (LDOs). The LDO inputs, V IN1 and V IN2 , are configured to operate from 200mV to 500mV above their respective output voltages. The MAX8737 EV kit outputs, V OUT1 and V OUT2 , are configured to provide 1.5V at  up  to  2A  (peak)  and 1.05V at up to 3A (peak), respectively.

The MAX8737 EV kit features a dual-MOSFET package to  achieve lower overall system cost. However, the dual MOSFET limits the power dissipation to 1.1W per output. This restriction limits the RMS current to 1.5A RMS for the 1.5V output (from a 1.8V input) and to 2A RMS for the 1.05V output (from a 1.5V input) .

The EV kit uses a separate 5V biasing power supply to power the MAX8737 controller and an external 2V reference to generate the feedback threshold voltages.

The EV kit provides jumper-selectable enable inputs for the two LDO outputs. The EV kit also provides PC board pads to access the PGOOD1 and PGOOD2 signals that  can  be  used as system reset signals during power-up in various applications. The EV kit demonstrates the configurable foldback current-limit feature of the MAX8737.

## Output Voltages (V OUT1 and V OUT2 )

The MAX8737 EV kit outputs, V OUT1 and V OUT2 , are configured to provide 1.5V at up to 2A (peak) and 1.05V at up to 3A (peak), respectively. The V OUT1 output regulation voltage is set by resistors R13 and R14. The V OUT2 output regulation voltage is set by resistors R9 and R10. The output voltages, V OUT1 and V OUT2 , may be reconfigured in the 0.5V to 2.5V range. Use the following equations  to  reconfigure  the  output  voltages  to  a desired value:

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

where VREF is the external reference voltage. Resistor R13 is 100k Ω :

<!-- formula-not-decoded -->

where VREF is the external reference voltage. Resistor R9 is 102k Ω .

Depending upon the desired output voltages, some of the MAX8737 EV kit components may require replacement. Refer to the REFIN Input section in the MAX8737 IC data sheet for more information on configuring the MAX8737 EV kit output voltages.

## Output Current Limits

The MAX8737 features an output current limit to prevent MOSFET failure. The MAX8737 EV kit V OUT1 and V OUT2 output peak current limits are configured to 2A and 3A by current-sense resistors R1 and R4, respectively. To select new resistor values for R1 and R4, refer to  the Current Limit section in the MAX8737 IC data sheet. The MAX8737 EV kit PC board traces are 2oz copper and can handle up to 5A of load current. Changing the current limits may require capacitors C6 and/or C10 to be replaced. To select new values for these components, refer to the Design Procedure section in the MAX8737 IC data sheet.

## PGOOD Outputs (PGOOD1 and PGOOD2)

The MAX8737 EV kit provides PC board pads to access the power-good output signals of the MAX8737. The PGOOD1 and PGOOD2 output signals can be used as system reset signals during power-up. The

<!-- image -->

## MAX8737 Evaluation Kit

open-drain PGOOD1 and PGOOD2 signals are pulled high when their respective output voltages (V OUT1 and V OUT2 )  rise  above  92%  (typ)  of  the  nominal  regulated voltage. The PGOOD1 and PGOOD2 outputs are pulled low when their respective output voltages (V OUT1 and V OUT2 ) drop below 88% (typ) of nominal regulated voltage.

## Output Enables (EN1 and EN2)

The MAX8737 EV kit features jumpers JU1 and JU2 to independently enable outputs V OUT2 and V OUT1 , respectively. See Table 1 and Table 2 for jumper JU1 and JU2 functions.

## Table 1. Jumper JU1 Function

| SHUNT LOCATION   | EN2 PIN CONNECTION   | EV KIT FUNCTION   |
|------------------|----------------------|-------------------|
| 1 and 2          | Connected to V CC    | VOUT2 is enabled  |
| 2 and 3          | Connected to GND     | VOUT2 is disabled |

## Table 2. Jumper JU2 Function

| SHUNT LOCATION   | EN1 PIN CONNECTION   | EV KIT FUNCTION   |
|------------------|----------------------|-------------------|
| 1 and 2          | Connected to V CC    | VOUT1 is enabled  |
| 2 and 3          | Connected to GND     | VOUT1 is disabled |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8737 Evaluation Kit

Figure 1. MAX8737 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

MAXIM

Figure 2. MAX8737 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX8737 Evaluation Kit

Figure 3. MAX8737 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX8737 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5