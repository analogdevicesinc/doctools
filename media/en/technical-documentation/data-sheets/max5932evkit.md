<!-- lastmod 2022-08-05 -->
## General Description

The MAX5932 evaluation kit (EV kit) is a fully assembled and tested hot-swap controller circuit board. The MAX5932 surface-mount, hot-swap controller provides foldback current limit, programmable undervoltage lockout (UVLO), programmable current-limit timer, and programmable output-voltage slew rate through an external n-channel MOSFET. The MAX5932 is pin and function compatible with the LT1641-1. This EV kit can be used to evaluate either part. The EV kit provides a power-good output signal that indicates the status of the output voltage.

The MAX5932 EV kit is configured for a 48V input application and up to 4.7A of output current. Power for the circuit can be provided from a 40V to 80V DC source used in  industrial  environments or in automotive 42V power systems. The overcurrent timeout limit is configured to 10ms. The UVLO threshold and the output voltage threshold are configured to 39V and 45.8V, respectively. The MAX5932 controls an n-channel MOSFET and provides current regulation during startup. The current-limiting and voltage threshold features are configurable by replacing components on the EV kit board.

The  EV  kit  can  also  be  used  to  evaluate  the MAX5933A/B/C/D/E/F and MAX5947A/B/C hot-swap controllers after replacing the MAX5932.

Warning: The MAX5932 EV kit is designed to operate with high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this EV kit or power the sources connected to it must be careful to follow safety procedures appropriate to working with high-voltage electrical equipment.

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this kit with care to avoid possible personal injury.

<!-- image -->

- ♦ 40V to 80V Input Application
- ♦ Output Current Limit Configured to 4.7A
- ♦ Overcurrent Time Limit Configured to 10ms
- ♦ Undervoltage Threshold Configured to 39V
- ♦ Power-Good Threshold Configured to 45.8V
- ♦ Configurable Output Current Limit Up to 20A
- ♦ Configurable Undervoltage and Power-Good Voltage Thresholds
- ♦ Configurable Overcurrent Time Limit
- ♦ Evaluates MAX5933A/B/C/D/E/F and MAX5947A/B/C (IC Replacement Required)
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX5932EVKIT | 0°C to +70°C | 8 SO         |

Note: To evaluate versions of the MAX5933 or MAX5947, request the specific free IC sample with the MAX5932 EV kit.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------|
| C1            |     1 | 0.01µF ±10%, 100V X7R ceramic capacitor (0805) TDK C2012X7R2A103K                    |
| C2            |     1 | 0.68µF ±10%, 16V X7R ceramic capacitor (0805) AVX 0805YD684KAT or TDK C2012X7R1C684K |
| C3            |     0 | Not installed, ceramic capacitor (0805)                                              |
| C4            |     1 | 220µF ±20%, 100V electrolytic capacitor (12.5mm x 25mm) Sanyo 100MV220HC             |
| C5, C6        |     0 | Not installed, electrolytic capacitors (12.5mm x 25mm)                               |
| C7            |     1 | 0.1µF ±10%, 100V X7R ceramic capacitor (1206) TDK C3216X7R2A104K                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX5932 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C8            |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H104K           |
| C9            |     1 | 1000µF ±20%, 100V electrolytic capacitor (22mm x 30mm) Sanyo 100PL1000DAA |
| C10           |     1 | 1µF ±20%, 100V X7R ceramic capacitor (1210) TDK C3225X7R2A105M            |
| R1            |     1 | 294k Ω ±1% resistor (0805)                                                |
| R2            |     1 | 10.2k Ω ±1% resistor (0805)                                               |
| R3            |     1 | 143k Ω ±1% resistor (0805)                                                |
| R4            |     1 | 4.22k Ω 1% resistor (0805)                                                |
| R5            |     1 | 10 Ω ±5% resistor (0603)                                                  |
| R6            |     1 | 10k Ω ±1% resistor (0603)                                                 |
| R7            |     1 | 0.01 Ω ±1%, 0.5W sense resistor (1206) IRC LRF-1206-01-R010-F             |

## Required Equipment

- 36VDC to 80VDC power supply capable of providing 6A
- 5V, 100mA DC power supply
- Voltmeter

The MAX5932 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Component List (continued)

| DESIGNATION                           |   QTY | DESCRIPTION                                                    |
|---------------------------------------|-------|----------------------------------------------------------------|
| R8                                    |     1 | 47k Ω ±5% resistor (0805)                                      |
| D1                                    |     1 | 54V TVS diode (SMB) Diodes Inc. SMBJ54A                        |
| D2                                    |     1 | 2A, 100V Schottky diode (SMB) Diodes Inc. B2100                |
| D3                                    |     1 | 18V, 350mW Zener diode (SOT23) Central Semiconductor CMPZ5248B |
| N1                                    |     1 | 100V, 17A, n-MOSFET (D 2 PAK) International Rectifier IRF530NS |
| U1                                    |     1 | MAX5932ESA (8-pin SO)                                          |
| +48VIN, +48VOUT, VIN, +VOUT, GND, GND |     6 | Noninsulated banana jack connectors                            |
| TP1                                   |     1 | PC test point, red                                             |
| SW1                                   |     1 | Momentary contact switch                                       |
| None                                  |     1 | MAX5932 PC board                                               |

## Component Suppliers

| SUPPLIER                      | PHONE        | FAX          | WEBSITE               |
|-------------------------------|--------------|--------------|-----------------------|
| AVX                           | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Central Semiconductor         | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Diodes Inc.                   | 805-446-4800 | 805-446-4850 | www.diodes.com        |
| International Rectifier       | 310-322-3331 | 310-726-8721 | www.irf.com           |
| IRC                           | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Sanyo Electronic Device Corp. | 619-661-6835 | 619-661-1055 | www.sanyodevice.com   |
| TDK                           | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX5932 when contacting these component suppliers.

## Quick Start

Note: During EV kit operation, the VIN pad and EV kit ground can be at an 80V difference. The user must exercise caution.

- 1) Utilizing  very  short  10A-rated  banana  leads  (&lt;  6in long) connect a 48VDC power supply between the +48VIN and GND banana jacks.
- 2) Connect the positive terminal of a 5VDC power supply to the V\_PULL pad. Connect the negative terminal of this 5VDC power supply to the GND pad.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 3) Connect a voltmeter across the +VOUT and GND pads.
- 4) Connect a voltmeter across the PWRGD and GND pads.
- 5) Turn on the 48V and 5V power supplies.
- 6) Using a very short 10A-rated banana lead (&lt;6in long),  connect the +48 VOUT banana jack to the VIN banana jack. This emulates hot-plug insertion into a live backplane.
- 7) Verify that the voltage at +VOUT is 48V.
- 8) Verify that the voltage at PWRGD is 5V.
- 9) Pressing pushbutton SW1 resets the voltage at +VOUT output and the PWRGD signal.
- 10) Test point TP1 is provided to observe the MOSFET gate (N1) voltage with an oscilloscope, using a 100M Ω impedance probe. The MAX5932 GATE drive pin sources 10µA (typ) to MOSFET N1 gate. A 10M Ω impedance probe may be used; this probe causes slightly slower GATE turn on.

Note: The banana leads connecting the power supply and the load to the EV kit must be very short (&lt; 6in long) and rated for at least 10A of current.

## Detailed Description

The MAX5932 EV kit is a hot-swap controller circuit board configured for a 40V to 80V input supply. The EV kit uses the MAX5932 hot-swap controller IC that integrates undervoltage lockout, overcurrent limit, overcurrent timeout, output voltage sensing, and MOSFET gate voltage control.

During startup, the MAX5932 controls n-channel MOSFET N1 and provides voltage and current slew-rate regulation once the UVLO threshold of 39V is exceeded by the input power supply. When stable voltage and current conditions are reached, the MAX5932 continues to monitor for fault conditions on the output current, output voltage, and input voltage. The PWRGD output signal is pulled high to V\_PULL once the output voltage exceeds the 45.8V threshold.

Bulk input capacitors C9 and C10 are included in the circuit,  between the +48VIN and +48VOUT banana jack connectors. TVS diode D1 provides transient overvoltage suppression during power-up, load dump, or short-circuit conditions. Diode D2 on the EV kit is used to prevent an inductive kickback resulting from long-lead connections in  a  lab  environment. C9, C10, D1, and D2 may not be needed in a real application circuit.

The UVLO, overcurrent limit, overcurrent timeout, and output voltage thresholds can be reconfigured by replacing components on the EV kit board. The EV kit PC

<!-- image -->

## MAX5932 Evaluation Kit

board is designed to handle up to 20A of output current. The  EV  kit  can  also  be  used  to  evaluate  the MAX5933A/B/C/D/E/F and MAX5947A/B/C hot-swap controllers after replacing the MAX5932 IC (U1).

## Input Power-Supply Connections

The MAX5932 EV kit circuit typically operates from an input source, with a voltage range of 40V to 80V, connected to the VIN banana jack. However, for proper lab evaluation, the MAX5932 EV kit circuit contains a 1000µF capacitor C9 and a 1µF capacitor C10 on the EV kit board input that can be used to simulate the bulk capacitance present on the live backplane of a power system. To duplicate a more accurate hot-insertion event during circuit  evaluation, first  connect the positive terminal of the power supply to the +48VIN banana jack and the negative terminal of the power supply to the GND banana jack on the EV kit. After the bulk capacitors have been charged, use a short banana-to-banana lead to connect the +48VOUT banana jack to the VIN banana jack. TVS diode D1 is used to protect the hot-swap controller from an overvoltage transient at the input.

Note: During EV kit operation, the VIN pad and EV kit  ground can be at an 80V difference. The user must exercise caution.

## Undervoltage Lockout

The MAX5932 hot-swap controller can operate from an input voltage of 9V to 80V. However, the MAX5932 EV kit  circuit  UVLO  is  configured  to  39V  by  resistors  R1 and R2. During EV kit power-up, the MAX5932 keeps MOSFET N1 in the off state until the configured UVLO threshold of 39V (typ) is exceeded. The UVLO threshold can be adjusted between 9V and 80V by replacing resistors R1 and R2. Use the following equation to select new resistor values:

<!-- formula-not-decoded -->

where VON = 1.313V (typ), VUVLO is the new UVLO threshold, and R2 is typically 10.2k Ω , ± 1% tolerance. Refer to the MAX5932 IC data sheet for additional UVLO information.

## PWRGD Output Voltage

The MAX5932 hot-swap controller provides a powergood (PWRGD) output that is pulled up to an external input voltage level when the output voltage threshold is exceeded. The MAX5932 EV kit output voltage threshold is  configured to 45.8V with resistors R3 and R4. When the output voltage exceeds 45.8V, the EV kit's PWRGD output voltage is pulled up to V\_PULL. When the output voltage falls below 43V (lower threshold is due to hys-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5932 Evaluation Kit

teresis),  the  EV  kit  is  PWRGD output is pulled down to ground. This PWRGD output signal can be used as a power-good signal to indicate the voltage at the output has reached an acceptable voltage level. A voltage source of up to 80V must be connected across V\_PULL and GND to observe the output signal at PWRGD.

The output voltage threshold can be adjusted between 9V and 80V by replacing resistors R3 and R4. Use the following equation to select new resistor values:

<!-- formula-not-decoded -->

where VFB = 1.313V (typical rising threshold) or 1.233V (typical falling threshold), VOUT is the new output voltage threshold, and R4 is typically 4.22k Ω ± 1% tolerance. Refer to the MAX5932 data sheet in the PWRGD Detection section.

## Output Current Limit

During an overcurrent or short-circuit condition, the MAX5932 hot-swap controller employs foldback current limit  and  short-circuit  protection circuitry.  This  ensures robust operation and prevents damage to the circuit load. Refer to the Short-Circuit Protection section in the MAX5932 data sheet for further details.

The MAX5932 EV kit current-sense resistor R7 is used to set the overcurrent limit threshold to 4.7A (typ). If the load current exceeds the 4.7A threshold for longer than the overcurrent timeout, MOSFET N1 is turned off and the  MAX5932 latches off. The output current limit can be adjusted up to 20A by replacing sense resistor R7. Use the following equation to select a new currentsense resistor value:

<!-- formula-not-decoded -->

where VSENSE = 0.047V (typ) and ILIMIT is the new current limit. Note : Verify that the sense resistor and MOSFET N1 power dissipation and current rating is higher than the new power dissipation levels.

## Overcurrent Timer

The maximum overcurrent timeout limit is set to 10ms (typ)  by  capacitor C2. If an overcurrent or short-circuit fault  condition  is  detected  for  longer  than  10ms,  the  nchannel MOSFET is turned off and the fault is latched. After the fault condition has been cleared, cycle the input supply or press switch SW1 to clear the latched fault and return to normal operation. The overcurrent time limit can be adjusted by replacing capacitor C2 or may be increased by adding a capacitor at C3 pads. Use the following equation to select new capacitance values:

<!-- formula-not-decoded -->

where TLIMIT is the new overcurrent time.

## Fault Reset

The MAX5932 EV kit features a pushbutton switch SW1 to allow momentary toggling of the MAX5932 ON pin. The switch disables the EV kit output or unlatches overcurrent faults.  An external controller can be connected to test point TP3 to control the ON pin of the MAX5932 EV kit. Refer to the MAX5932 data sheet for additional functions of the ON pin.

## MOSFET Gate Voltage

The MAX5932 hot-swap controller provides a high-side gate drive for the external n-channel MOSFET N1. An internal  charge pump guarantees at least 10V of gate drive for supply voltages higher than 20V and 4.5V gate drive for supply voltages between 10.8V and 20V.

During an overcurrent condition, the voltage at the MAX5932 GATE pin is adjusted to maintain a constant voltage across the current-sense resistor R7. If the fault condition exceeds the TLIMIT timeout setting, the gate voltage goes low to turn off the MOSFET.

The MAX5932 EV kit provides test point TP1 to observe the gate-drive voltage with a high-impedance oscilloscope probe. The gate turn-on time can be adjusted by replacing capacitor C1 on the EV kit board. Refer to the Power-Up Sequence section in the MAX5932 data sheet for selecting different component values.

## Evaluating MAX5933 and MAX5947 Hot-Swap Designs

The  MAX5932  EV  kit  can  also  evaluate  the MAX5933A/B/C/D/E/F or the MAX5947A/B/C hot-swap controller.  Refer  to  the  MAX5933/MAX5947 data sheet for functional information on other versions of this product family. Verify that the EV kit circuit components function properly when evaluating the MAX5933 or MAX5947 hot-swap controllers. The MAX5932 must be removed and replaced with the desired IC.

## Thermal Shutdown

If  the  MAX5932 die temperature reaches +150°C, an over-temperature fault is generated and MOSFET N1 is turned off. The MAX5932 EV kit board layout facilitates temperature sensing by placing the MOSFET next to the MAX5932 and extending copper from the N1 drain to beneath the MAX5932 IC. See Figure 2 in the EV kit data sheet and Figure 14 on the MAX5932 IC data sheet for recommended layout.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1. MAX5932 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5932 Evaluation Kit

<!-- image -->

Figure 2. MAX5932 EV Kit Component Placement GuideComponent Side

Figure 3. MAX5932 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX5932 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

<!-- image -->