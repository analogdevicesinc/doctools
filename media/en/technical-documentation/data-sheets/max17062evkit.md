<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX17062 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB that provides the voltages required for active-matrix, thin-film transistor (TFT), liquid-crystal displays (LCDs). The EV kit contains a pulse-width-modulated (PWM) step-up switching regulator, a positive single-stage charge pump for the TFT gate-on supply, and a negative single-stage charge pump for the TFT gate-off supply.

The EV kit operates from a DC supply voltage of +4.5V to +5.5V and is configured to operate with a switching frequency of 1.2MHz. The step-up switching regulator is configured for a +15V output and can provide 600mA with a +4.5V input. The positive charge pump is configured for a +29V output providing 30mA. The negative charge pump is configured for a -15V output providing 30mA.

The MAX17062 EV kit features low-quiescent current and high-conversion efficiency (90%). The high switching frequency allows the use of small, surface-mount components.

| DESIGNATION       |   QTY | DESCRIPTION                                                                             |
|-------------------|-------|-----------------------------------------------------------------------------------------|
| C1, C2            |     2 | 4.7µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A475K                        |
| C3                |     1 | 1µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J105K TDK C1068X7R1C105K    |
| C4                |     1 | 0.033µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E333K TDK C1608X7R1H333K |
| C5                |     1 | 560pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H561J TDK C1608C0G1H561J    |
| C6, C13, C16, C17 |     0 | Not installed, ceramic capacitors (0603)                                                |

Features

- ♦ 90% Efficiency
- ♦ +2.6V to +5.5V Input Range
- ♦ Output Voltage Adjustable from VIN to 20V
- ♦ Output Voltages (+4.5V to +5.5V Input)
- +15V Output at 600mA
- +29V Output at 30mA (Positive Charge Pump)
- -15V Output at 30mA (Negative Charge Pump)
- ♦ 1.2MHz Switching Frequency (Selectable: 640kHz or 1.2MHz)
- ♦ Programmable Soft-Start
- ♦ 0.01µA IC Shutdown Current (typ)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17062EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C7, C8        |     2 | 10µF ±10%, 25V X5R ceramic capacitors (1210) Murata GRM32DR61E106K TDK C3225X5R1E106K   |
| C9            |     0 | N ot i nstal l ed , cer am i c cap aci tor ( 1210)                                      |
| C10           |     0 | Not installed, aluminum electrolytic capacitor (SMT: 6.3mm x 6mm)                       |
| C11, C15      |     2 | 0.22µF ±10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H224K TDK C2012X7R1H224K |
| C12, C14      |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K TDK C1608X7R1H104K  |
| C18           |     0 | N ot i nstal l ed , cer am i c cap aci tor ( 0805)                                      |
| D1            |     1 | 3A, 30V Schottky diode (M-Flat) Toshi b a C M S 03 ( TE 12L- Q) LE AD FRE E             |

## MAX17062 Evaluation Kit

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------------------------------------------------------|
| D2, D4        |     2 | 250mA, 90V dual ultra-fast diodes (SOT23) Central Semiconductor CMPD1001S LEAD FREE (Top Mark: L21) Diodes Inc. BAV99 (300mA, 100V) |
| D3            |     0 | Not installed, diode (SOT23)                                                                                                        |
| JU1           |     1 | 2-pin header (0.1in centers)                                                                                                        |
| JU2           |     0 | Not installed, 3-pin header-short (0.1in centers)                                                                                   |
| JU3           |     0 | Not installed, 2-pin header-short (0.1in centers)                                                                                   |
| L1            |     1 | 2.7µH ±20% power inductor TOKO FDV0630-2R7 (27m Ω , 4.4A) Sumida CDRH5D18BHPNP-2R7M (65m Ω , 3.9A)                                  |

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| R1            |     1 | 100k Ω ±5% resistor (0603)                                                    |
| R2            |     1 | 47k Ω ±5% resistor (0603)                                                     |
| R3            |     1 | 20k Ω ±1% resistor (0603)                                                     |
| R4            |     1 | 221k Ω ±1% resistor (0603)                                                    |
| R5            |     1 | 10 Ω ±5% resistor (0603)                                                      |
| R6            |     0 | Not installed, resistor (0603)                                                |
| R7            |     1 | 0 Ω ±5% resistor (0603)                                                       |
| U1            |     1 | High-performance step-up DC-DC controller (10 TDFN-EP*) Maxim M AX 17062E TB+ |
| -             |     1 | Shunt                                                                         |
| -             |     1 | PCB: MAX17062 Evaluation Kit+                                                 |

## Procedure

The MAX17062 EV kit is fully assembled and tested. Follow these steps to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that there is no shunt placed across jumper JU1 to enable the MAX17062.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor                  | 631-435-1110 | www.centralsemi.com         |
| Diodes, Inc.                           | 805-446-4800 | www.diodes.com              |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX17062 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- +4.5V to +5.5V, 5A DC power supply (VIN)
- Voltmeter
- 2) Connect the positive terminal of the DC power supply to the VIN pad. Connect the negative terminal of the DC power supply to the PGND pad.
- 3) Turn on the +4.5V to +5.5V DC power supply and verify  that  the  step-up  switching  regulator  output (VOUT) is +15V.
- 4) Verify  that  the  gate-on  supply  (VGON) is  approximately +29V.
- 5) Verify that the gate-off supply (VGOFF) is approximately -15V.

## MAX17062 Evaluation Kit

## Detailed Description

The MAX17062 EV kit contains a high-efficiency, pulsewidth-modulated (PWM), step-up switching regulator, a positive single-stage unregulated charge pump, and a negative single-stage unregulated charge pump. The MAX17062 features a programmable soft-start, loopcompensation pin, and an internal MOSFET switch. The EV kit operates from a +4.5V to +5.5V DC power supply.

As configured, the step-up switching regulator generates a +15V output (VOUT) and can provide 600mA with a 4.5V input. The step-up switching regulator output voltage can be adjusted from VIN to +20V by changing the values of the feedback resistors (see the Evaluating Other Output Voltages section).

The VGON supply consists of a single positive chargepump stage to generate approximately twice the VOUT voltage (or approximately +29V) and provide 30mA. The VGOFF supply consists of a single negative charge-pump stage to generate approximately -VOUT (or approximately -15V) and provide 30mA.

The EV kit is configured for a +4.5V input and a 1.2MHz switching frequency. Operation at a different input voltage, output voltage (VOUT), or switching frequency may require a different inductor, output capacitors, and compensation components. Refer to the MAX17062 IC data sheet for detailed information on loop compensation and component selection.

## Jumper Selection

## Shutdown Mode ( SHDN )

The EV kit features a shutdown mode that reduces the MAX17062 quiescent current. JU1 selects the shutdown mode. See Table 1 for jumper JU1 functions.

Table 1. Jumper JU1 Functions

| SHUNT POSITION   | SHDN PIN                    | MAX17062 OUTPUT                     |
|------------------|-----------------------------|-------------------------------------|
| Installed        | Connected to GND            | Shutdown mode, VOUT = VIN - V DIODE |
| Not installed*   | Connected to VIN through R1 | MAX17062 enabled, VOUT = +15V       |

<!-- image -->

## Switching-Frequency Selection (FREQ)

The MAX17062 EV kit provides the option to configure the switching frequency of the step-up DC-DC converter. Table 2 lists jumper JU2 settings for configuring the switching frequency. The EV kit is configured and shipped to operate at 1.2MHz. For operation at 640kHz, cut the trace between pins 1 and 2 of jumper JU2 and short pins 2 and 3. Refer to the MAX17062 data sheet for selecting the proper components.

Table 2. Jumper JU2 Functions

| SHUNT POSITION   | FREQ PIN                                                                   | SWITCHING FREQUENCY   |
|------------------|----------------------------------------------------------------------------|-----------------------|
| 1-2*             | Connected to VIN with a PC trace                                           | 1.2MHz                |
| 2-3              | Connected to GND (cut the trace between pins 1-2 before shorting pins 2-3) | 640kHz                |

## Evaluating Other Output Voltages

The MAX17062 EV kit's step-up switching-regulator output (VOUT) is set to +15V by feedback resistors R3 and R4. To generate output voltages other than +15V (VIN to +20V), select different external voltage-divider resistors,  R3  and  R4.  Select  R3  in  the  10k Ω to  50k Ω range. R4 is then given by:

<!-- formula-not-decoded -->

where VFB = 1.24V. Note that changing the VOUT voltage also changes the VGON and VGOFF charge-pump output voltages. For significantly different operation points, the EV kit may require a different inductor and component changes. Refer to the MAX17062 data sheet for proper component selection.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17062 Evaluation Kit

## Positive Charge-Pump Configuration

As configured, the single-stage positive charge pump generates approximately double the VOUT output voltage at VGON. The charge pump can be reconfigured as a two-stage positive charge pump, providing triple the VOUT output voltage at VGON. This is accomplished by installing capacitors C13, C16, diode D3, and removing resistor R7. See Table 3 for suggested component values.

Table 3. Two-Stage Charge-Pump Components

| DESIGNATION   |   QTY | DESCRIPTION                                   |
|---------------|-------|-----------------------------------------------|
| C13, C16      |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) |
| D3            |     1 | 250mA, 90V dual ultra-fast diode (SOT23)      |
| R7            |     0 | Not installed, resistor                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17062 Evaluation Kit

<!-- image -->

Figure 1. MAX17062 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17062 Evaluation Kit

<!-- image -->

Figure 2. MAX17062 EV Kit Component Placement GuideComponent Side

Figure 3. MAX17062 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX17062 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17062 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                   | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------|-----------------|
|                 0 | 11/07           | Initial release                                                               | -               |
|                 1 | 6/08            | Schematic changes: added EP to U1 and changed ground of C3 from PGND to AGND. | 5               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 7