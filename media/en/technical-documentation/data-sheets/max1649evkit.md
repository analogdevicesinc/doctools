<!-- lastmod 2022-08-02 -->
## General Description

The MAX1649 evaluation kit (EV kit) provides a regulated 5V output voltage from a 5.5V to 16.5V source. The circuit is configured to deliver up to 1.5A of output current  using  all  surface-mount  components.  The MAX1649's low quiescent current and unique currentlimited PFM control scheme provide high efficiency over a wide range of load currents.

The MAX1649 EV kit can also be used to evaluate the MAX1651 (3.3V output), MAX649, MAX651, and MAX652.  However,  the  MAX1649/MAX1651  are improved versions of the MAX649/MAX651, and are recommended for new designs.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C1, C6        |     2 | 68µF, 20V ±20% tantalum capacitors (E-case) AVX TPSE686M020R0150                       |
| C2            |     1 | 330µF, 10V ±10% tantalum capacitor (E-case) AVX TPSE337K010R0060                       |
| C3, C4        |     2 | 0.1µF ±10% ceramic capacitors (0805) Panasonic ECJ-3VB1H104K                           |
| C5            |     0 | Not installed, capacitor (1206)                                                        |
| C7            |     0 | Not installed, capacitor (D-case)                                                      |
| D1            |     1 | Schottky diode Nihon NSQ03A03L                                                         |
| JU1           |     1 | 3-pin header                                                                           |
| JU3           |     0 | Not installed, shorted by PC trace                                                     |
| L1            |     1 | 47µH inductor Sumida CDRH125NP-470MC                                                   |
| P1            |     1 | p-channel MOSFET (8-pin SO-8) International Rectifier IRF7416PBF Fairchild NDS8435A_NL |
| R1            |     1 | 0.050 Ω ±1%, 0.5W resistor (2010) Dale WSL2010R0500FEA IRC LRC-LR2010LF-01-R050-F      |
| R2            |     0 | Not installed, resistor (1206)                                                         |
| R3            |     0 | Not installed, resistor (1206)-shorted by PC trace                                     |
| U1            |     1 | MAX1649CSA+ (8-pin SO-8)                                                               |
| -             |     1 | Shunt                                                                                  |
| -             |     1 | PCB: MAX1649 Evaluation Kit+                                                           |

<!-- image -->

## Features

- ♦ + 5.5V to +16.5V Input Supply Range
- ♦ Over 90% Efficiency for 10mA to 1.5A Loads
- ♦ 100 µ A (max) Quiescent Supply Current
- ♦ Fixed 5V or Optional Adjustable Output Voltage
- ♦ 1.5A Output Current Capability
- ♦ Fully Assembled and Tested

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX1649EVKIT-SO+ | EV Kit |

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| AVX                     | 843-946-0238 | www.avx.com           |
| Fairchild               | 888-522-5372 | www.fairchildsemi.com |
| International Rectifier | 310-322-3331 | irf.com               |
| IRC                     | 361-992-7900 | irctt.com             |
| Nihon/NIEC              | 847-843-7500 | www.niec.co.jp        |
| Panasonic               | 800-344-2112 | www.panasonic.com     |
| Sumida Corp.            | 847-545-6700 | www.sumida.com        |
| Vishay/Dale Resistors   | 402-564-3131 | www.vishay.com        |

Note: Indicate that you are using the MAX1649 when contacting these component suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX1649 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +5.5V to +16.5V power supply to the pad marked VIN.
- 2) Connect ground to the GND pad.
- 3) Connect a voltmeter and load (if any) to the VOUT pad.
- 4) For normal operation, place the shunt across pins 1 and 2 of jumper JU1.
- 5) Turn on the power supply and verify that the output voltage is 5V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX1649 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Shutdown Control

The MAX1649 provides a SHDN pin to disable the output.  Table 1 lists  the  options  available  for  shutdown control jumper JU1. An external controller can be used by removing the shunt on JU1 completely and connecting the external controller to the pad labeled SHDN. SHDN is a TTL/CMOS logic-level input.

## Output Voltage Adjustment

The output voltage can be adjusted with minor modifications to the EV kit board. First, select output voltagedivider resistors R2 and R3 (refer to the Setting the Output Voltage section of the MAX1649 data sheet). Second, open jumper JU3 and resistor R3 by cutting the thin  PCB trace between their pads. Finally, install R2 and R3. The standard output filter capacitor is rated at 10V. Use a higher-rated capacitor if necessary.

When using the MAX1651 or when adjusting the output of either device, an input voltage below 5.5V is accept- able. However, the input voltage must be high enough to avoid dropout (refer to the Typical Operating Characteristics of the MAX1649/MAX1651 data sheet).

## Evaluating the MAX649/MAX651/MAX652

The MAX1649 EV kit can also be used to evaluate the MAX649/MAX651/MAX652. In addition to replacing the MAX1649 with a MAX649, change resistor R1 to 0.1 Ω . Contact Maxim for free samples of the MAX649CSA, MAX651CSA, or MAX652CSA. Note that the MAX1649/ MAX1651 are  recommended  over  the  MAX649/ MAX651/MAX652 for new designs.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX1649 OUTPUT              |
|------------------|------------------|-----------------------------|
| 1 and 2          | Connected to GND | MAX1649 enabled, V OUT = 5V |
| 2 and 3          | Connected to VIN | Shutdown mode, V OUT = 0V   |

Figure 1.  MAX1649 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  MAX1649 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1649 Evaluation Kit

Figure 3.  MAX1649 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4.  MAX1649 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1649 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                 | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------|-----------------|
|                 0 | 10/97           | Initial release                                             | -               |
|                 1 | 11/07           | Update for RoHS compliance; update Component Suppliers list | 1, 2, 3         |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

4

<!-- image -->