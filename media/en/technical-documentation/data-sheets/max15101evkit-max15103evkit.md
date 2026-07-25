<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX15101/MAX15102/MAX15103 Evaluation Kits Evaluate: MAX15101/MAX15102 /MAX15103

## General Description

The  MAX15101/MAX15102/MAX15103  evaluation  kits (EV  kits)  provide  a  proven  design  to  evaluate  the MAX15101/MAX15102/MAX15103  small,  low-dropout linear  regulators capable of delivering up to 1A, 2A, or 3A in a wafer-level package (WLP). The EV kits are preset for 1.5V output at load currents of 1A for the MAX15101, 2A for the MAX15102, and 3A for the MAX15103. The EV kits offer an enable input and power-good output and are capable of operating from a 1.7V to 5.5V supply. Refer to the Operating Region and Power Dissipation section  in the respective IC data sheet when operating at the higher end of the input supply range.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                          |
|---------------|-------|------------------------------------------------------------------------------------------------------|
| C1            |     1 | 2.2 F F Q 10%, 10V X7R ceramic capacitor (0603) TDK C1608X5R1A225M                                   |
| C2            |     1 | 22 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Samsung CL10A226MQ8NRNE Taiyo Yuden AMK107BBJ226MA-T |
| C3            |     1 | 0.1 F F Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K TDK C1608X7R1H104K             |
| C4            |     0 | Not installed, aluminum electrolytic capacitor (12.5mm x 25mm)                                       |

Features

- S 1.7V to 5.5V Input Voltage Range
- S Output Current

1A for MAX15101

2A for MAX15102

3A for MAX15103

- S Output Voltage Range: 0.6V Up to (VIN - 200mV)
- S 200mV Dropout Guaranteed at 3A
- S Enable Input/Power-Good Output
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                              |
|---------------|-------|------------------------------------------|
| C5, C7        |     0 | Not installed, ceramic capacitors (0805) |
| C6, C8        |     0 | Not installed, ceramic capacitors (1206) |
| JU1           |     1 | 2-pin header                             |
| R1            |     1 | 909 I Q 1% resistor (0603)               |
| R2            |     1 | 604 I Q 1% resistor (0603)               |
| R5, R7        |     2 | 100k I Q 5% resistors (0603)             |
| R6            |     0 | Not installed, resistor (0603)           |
| U1            |     1 | See the EV Kit-Specific Component List   |
| -             |     1 | Shunt                                    |
| -             |     1 | PCB: MAX15101/2/3 EVALUATION KIT         |

## EV Kit-Specific Component List

| PART           | DESIGNATION   | DESCRIPTION                                                  |
|----------------|---------------|--------------------------------------------------------------|
| MAX15101EVKIT# | U1            | 1A low-dropout linear regulator (15 WLP) Maxim MAX15101EWL+T |
| MAX15102EVKIT# | U1            | 2A low-dropout linear regulator (15 WLP) Maxim MAX15102EWL+T |
| MAX15103EVKIT# | U1            | 3A low-dropout linear regulator (15 WLP) Maxim MAX15103EWL+T |

## MAX15101/MAX15102/MAX15103 Evaluation Kits Evaluate: MAX15101/MAX15102 /MAX15103

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Samsung Electro-Mechanics              | 949-797-8047 | www.sem.samsung.com         |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX15101, MAX15102, or MAX15103 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX15101,	MAX15102,	or	MAX15103	EV	kit
- 1.7V	to	5.5V,	3A	DC	power	supply
- Load	capable	of	sinking	up	to	3A
- Digital	voltmeter

## Table 1. Regulator Enable (EN) Jumper JU1 Description

| SHUNT POSITION   | EN PIN                   | DEVICE OUTPUT   |
|------------------|--------------------------|-----------------|
| Installed*       | Connected to IN          | Enabled         |
| Not installed    | Pulled to GND through R7 | Disabled        |

## Bypass/Soft-Start Input (SS\_BYP)

The  MAX15101/MAX15102/MAX15103 utilize an adjustable  soft-start  function  to  limit  inrush  current  during startup and reduce the output noise. The soft-start time is  adjusted  by  the  value  of  C3,  the  external  capacitor from SS\_BYP to GND. By default, C3 is currently 0.1 F F, which gives a soft-start time of approximately 6.5ms. To determine the soft-start time, determine t SS  using the following formula:

<!-- formula-not-decoded -->

where t SS  is the required soft-start time in seconds and C3  is  in  nanofarads.  C3  should  be  a  minimum  4.7nF capacitor between SS\_BYP and GND.

## Setting the Output Voltage

The EV kit can be adjusted from 0.6V up to [V IN  - 200mV] by changing the values of resistors R1 and R2. To determine the value of the resistor-divider, set R2 to 604 I , and then use the following equation to calculate R1:

<!-- formula-not-decoded -->

where V FB is equal to the 0.6V and V OUT  is the output.

## Procedure

The EV kits are fully  assembled and tested. Follow the steps below to verify the board operation. Caution: Do not  turn  on  power  supply  until  all  connections  are completed.

- 1)  Connect the positive terminal of the 5V supply to the IN PCB pad and the negative terminal to the nearest PGND PCB pad.
- 2)  Connect the positive terminal of the load to the OUT PCB  pad  and  the  negative  terminal  to  the  nearest PGND PCB pad.
- 3)  Connect  the  digital  voltmeter  across  the  OUT  PCB pad and the nearest PGND PCB pad.
- 4)  Verify that a shunt is installed on jumper JU1.
- 5)  Turn on the DC power supply.
- 6)  Enable the load.
- 7)  Verify that the voltmeter displays 1.5V.

## Detailed Description of Hardware

## Regulator Enable (EN)

The MAX15101/MAX15102/MAX15103 feature an enable input. For normal operation, a shunt should be installed on jumper JU1. To disable the output, remove the shunt on JU1 and the EN pin is pulled to GND through resistor R7. See Table 1 for JU1 settings.

## MAX15101/MAX15102/MAX15103 Evaluation Kits Evaluate: MAX15101/MAX15102 /MAX15103

Figure 1. MAX15101 EV Kit Schematic

<!-- image -->

## MAX15101/MAX15102/MAX15103 Evaluation Kits Evaluate: MAX15101/MAX15102 /MAX15103

Figure 2. MAX15102 EV Kit Schematic

<!-- image -->

## MAX15101/MAX15102/MAX15103 Evaluation Kits Evaluate: MAX15101/MAX15102 /MAX15103

Figure 3. MAX15103 EV Kit Schematic

<!-- image -->

## MAX15101/MAX15102 / MAX15103 Evalution Kits Evalute: MAX15101/ MAX15102 / MAX15103

<!-- image -->

Figure 4. MAX15101/MAX15102/MAX15103 EV Kits Component Placement Guide-Component Side

Figure 5. MAX15101/MAX15102/MAX15103 EV Kits PCB Layout-Component Side

<!-- image -->

Figure 6. MAX15101/MAX15102/MAX15103 EV Kits PCB Layout-Inner Layer 2 GND

<!-- image -->

## MAX15101/MAX15102 / MAX15103 Evalution Kits Evalute: MAX15101/ MAX15102 / MAX15103

Figure 7. MAX15101/MAX15102/MAX15103 EV Kits PCB Layout-Inner Layer 3 Power

<!-- image -->

Figure 8. MAX15101/MAX15102/MAX15103 EV Kits PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX15101EVKIT # | EV Kit |
| MAX15102EVKIT # | EV Kit |
| MAX15103EVKIT # | EV Kit |

# Denotes RoHS compliant.

## MAX15101/MAX15102/MAX15103 Evaluation Kits

## Evaluate: MAX15101/MAX15102 /MAX15103

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/11            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.