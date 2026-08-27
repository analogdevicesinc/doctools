<!-- lastmod 2022-08-04 -->
## General Description

The MAX8723 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a pulse-width-modulated (PWM) step-down DC-DC converter. The EV kit is configured to operate with a 1.5MHz switching frequency. It operates from a +6V to +13.2V DC supply voltage, is configured for a +3.3V output, and can provide up to 2A output current.

The MAX8723 EV kit can be reconfigured to operate at 500kHz or 1MHz and can also drive an external synchronous rectifier. In addition, the output voltage can be adjusted from 2.0V to 3.6V by installing appropriate feedback resistors R4 and R5.

The EV kit is a fully assembled and tested circuit board that features low quiescent current and high conversion efficiency (84%). Operation at 1.5MHz allows the use of small surface-mount components.

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| C1            |     1 | 4.7µF ±10%, 16V X5R ceramic capacitor (0805) TDK C2012X5R1C475K                |
| C2            |     1 | 0.1µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K                |
| C3            |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A105K                  |
| C4            |     1 | 0.22µF ±10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A224K               |
| C5            |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H104K                |
| C6            |     1 | 22µF ±20%, 6.3V X7R ceramic capacitor (0805) TDK C2012X5R0J226M                |
| C7            |     1 | 47µF ±20%, 25V aluminum electrolytic capacitor (6.3mm x 6.0mm) Sanyo 25CV470AX |

<!-- image -->

Features

- ♦ +6V to +13.2V Input Range
- ♦ 2A Output Current
- ♦ 1.5MHz Switching Frequency (Selectable: 500kHz, 1MHz, Component Changes Required)
- ♦ +3.3V Output Voltage (Fixed Mode)
- ♦ 2.0V to 3.6V Output Voltage (Adjustable Mode)
- ♦ 84% Efficiency
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE          |
|--------------|--------------|---------------------|
| MAX8723EVKIT | 0°C to +70°C | 16 TQFN (4mm x 4mm) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                   |
|---------------|-------|-----------------------------------------------|
| C8            |     0 | Not installed, ceramic capacitor (1206)       |
| C9            |     0 | Not installed, ceramic capacitor (0805)       |
| D1            |     1 | 3A, 30V Schottky diode (M-flat) Toshiba CMS03 |
| JU1           |     1 | 2-pin header                                  |
| JU2           |     0 | Not installed, 4-pin header                   |
| L1            |     1 | 2.2µH power inductor Sumida CDRH5D18NP-2R2NC  |
| R1, R6        |     2 | 0 Ω ±5% resistors (0603)                      |
| R2            |     0 | Not installed, short by PC trace (0603)       |
| R3            |     1 | 100k Ω ±5% resistor (0603)                    |
| R4            |     0 | Not installed, resistor (0805)                |
| R5            |     1 | 0 Ω ±5% resistor (0805)                       |
| Q1            |     0 | Not installed, n-channel MOSFET(SOT23)        |
| U1            |     1 | MAX8723ETE+ (16-pin TQFN 4mm x 4mm)           |
| -             |     1 | Shunt                                         |
| -             |     1 | MAX8723 EV kit PC board                       |

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| International Rectifier | 310-322-3331 | www.irf.com           |
| Sanyo                   | 619-661-6835 | www.sanyodevice.com   |
| Sumida                  | 847-545-6700 | www.sumida.com        |
| TDK                     | 847-803-6100 | www.component.tdk.com |
| Toshiba                 | 949-455-2000 | www.toshiba.com/taec  |

Note: Indicate that you are using the MAX8723 when contacting these suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX8723 Evaluation Kit

## Recommended Equipment

- 12V, 2A DC power supply
- Voltmeters

## Quick Start

The MAX8723 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify  that  there  is  no  shunt  across  jumper  JU1  to enable the MAX8723.
- 2) Set the DC power supply to +12V.
- 3) Connect the positive terminal of the DC power supply to the VIN pad. Connect the negative terminal of the DC power supply to the PGND pad closest to VIN.
- 4) Connect a voltmeter across the VOUT and PGND pads.
- 5) Turn on the power supply and verify that the output (VOUT) is +3.3V.

## Detailed Description

The MAX8723 EV kit contains a high-efficiency, PWM, step-down switching regulator. The EV kit operates from a +6V to +13.2V DC power supply, is configured for a +3.3V output, and is capable of providing a 2A load current. The regulator's switching frequency is set to 1.5MHz. See the Switching-Frequency Selection (FREQ) section for operation at other frequencies.

The EV kit can be operated with a fixed-mode (+3.3V) or adjustable-mode (2.0V to 3.6V) output. When operating in adjustable mode, the EV kit output is set by installing  appropriate feedback resistors, R4 and R5. For details on changing the feedback resistors see the Evaluating Other Output Voltages section.

The EV kit provides shutdown capability through jumper JU1. The use of an external synchronous rectifier, Q1, is also supported. See the External Synchronous Rectifier section.

## Jumper Selection

## Shutdown Mode ( SHDN )

The EV kit features a shutdown mode that reduces the MAX8723 quiescent current. JU1 selects the shutdown mode. See Table 1 for jumper JU1 functions.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION          | SHDN PIN                    | MAX8723 OUTPUT                |
|-------------------------|-----------------------------|-------------------------------|
| Installed               | Connected to GND            | Shutdown mode, VOUT = 0V      |
| Not installed (default) | Connected to VCC through R3 | MAX8723 enabled, VOUT = +3.3V |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Switching-Frequency Selection (FREQ)

The MAX8723 EV kit provides the option to configure the switching frequency of the step-down DC-DC converter. Table 2 lists jumper JU2 settings for configuring the  switching frequency. The EV kit is configured and shipped to operate at 1.5MHz. For operation at 500kHz or 1MHz, cut the trace between pins 1 and 2 of jumper JU2 and short pins 1 and 3 or 1 and 4, respectively. Changing the switching frequency may require different converter components. Refer to the MAX8723 data sheet for proper component selection.

## Table 2. Jumper JU2 Functions

| SHUNT LOCATION   | FREQ PIN                         | SWITCHING FREQUENCY   |
|------------------|----------------------------------|-----------------------|
| 1-2 (default)    | Connected to GND with a PC trace | 1.5MHz                |
| 1-3              | Connected* to VREF               | 500kHz                |
| 1-4              | Connected* to VCC                | 1MHz                  |

## Evaluating Other Output Voltages

As configured, the MAX8723 EV kit operates in fixedoutput mode, providing a +3.3V output. To adjust the EV kit output voltage (2.0V to 3.6V) choose appropriate R4 and R5 resistance values. See Table 3 for details on selecting appropriate feedback resistors.

## Table 3. Output-Voltage Modes

| OUTPUT MODE   | FEEDBACK RESISTORS                                                                    | OUTPUT VOLTAGE                                                   |
|---------------|---------------------------------------------------------------------------------------|------------------------------------------------------------------|
| Fixed         | R4 = open R5 = 0 Ω                                                                    | +3.3V                                                            |
| Adjustable    | R5 = 10k Ω to 50k Ω V FB = 2.0V R R VOUT V FB 4 5 1 = ×               - | (2.0V to 3.6V) VOUT V R R FB = × +             1 4 5 |

<!-- image -->

## External Synchronous Rectifier

The EV kit provides for the use of an external synchronous rectifier. To utilize an external synchronous rectifier,  install  an  adequate n-channel MOSFET (Q1) and remove or replace diode D1. Installing a smaller diode in conjunction with the synchronous rectifier improves efficiency. Leaving the diode unpopulated reduces cost. See Table 4 for recommended components.

## MAX8723 Evaluation Kit

## Table 4. Recommended Configurations

| Q1                                                       | D1                                                                               | EFFICIENCY (%) (V IN = 12V, I OUT = 2AAT 1.5MHz)   |
|----------------------------------------------------------|----------------------------------------------------------------------------------|----------------------------------------------------|
| Not installed (default)                                  | 3A, 30V Schottky diode (M-flat) ToshibaCMS03                                     | 83                                                 |
| 3A, 20V n-channel MOSFET (Supersot-3) Fairchild FDN339AN | Not installed 500mA, 30V Schottky diode (SOD123) International Rectifier MBR0530 | 84 85                                              |

<!-- image -->

Figure 1. MAX8723 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8723 Evaluation Kit

<!-- image -->

Figure 2. MAX8723 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX8723 EV Kit PC Board Layout-Internal Layer 2, GND Plane

Figure 3. MAX8723 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX8723 EV Kit PC Board Layout-Internal Layer 3, Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX8723 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX8723 Evaluation Kit

Figure 7. MAX8723 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5