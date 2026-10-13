<!-- lastmod 2022-08-04 -->
<!-- image -->

Evaluates: MAX17523A

## General Description

The MAX17523A evaluation kit (EV kit) is a fully assembled  and  tested  circuit  board  that  demonstrates  the MAX17523A, a 4.2V to 36V, 1A, current limiter with OV, UV,  and  reverse  voltage  protection  in  a  16-pin  TQFN package. The EV kit features a TVS diode on input and a Schottky diode on output. Input power to the EV kit uses a 4.2V to 36V input supply.

The EV kit circuit can be configured to demonstrate the device's different current-limit types, adjustable overvoltage, undervoltage, and different current-limit thresholds.

## Features

- 4.2V to 36V Operating Voltage Range
- Features a TVS Diode Across the Input and a Schottky Diode Across the Output Terminals
- Internal UVLO Programmed to 18.5V
- Internal OVLO Programmed to 33V
- Evaluates Three Current-Limit Types: Current-Limit Threshold, OVLO, and UVLO
- Jumper-Configurable Current-Limit (Selected as 1A by Default)
- Current-Limit Mode Set To Autoretry by Default
- Proven PCB Layout
- Fully Assembled and Tested

## MAX17523A EV Kit Photo

<!-- image -->

## MAX17523A Evaluation Kit

## Quick Start

## Required Equipment

- MAX17523A EV kit
- 36V DC power supply
- Multimeter
- USB-A male to USB-B male cable or 5V DC power supply

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that all jumpers are in their default positions.
- 2) Connect the USB cable to J1 from a computer or connect a 5V DC power supply to TP3.
- 3) Verify that LED1 is on.
- 4) Connect a 20V DC power supply to IN. Verify that OUT is 20V.
- 5) Gradually increase voltage on the DC power supply and verify that the OUT voltage goes down and FLAG goes low when the input reaches approximately 33V.
- 6) Gradually decrease voltage on the DC power supply and verify that OUT comes back and FLAG goes high when the input reaches approximately 32V.
- 7) Set the DC power-supply voltage to 24V, then connect the adjustable load between the OUT and GND terminals and a multimeter in series to measure the current. Gradually increase the load current and verify that the OUT goes down and FLAG goes low when the load current increases above 1A.
- 8) The jumper JU1 can be configured to change the current limit as shown in Table 2. Verify various current limit operations by repeating step 7.

Ordering Information appears at end of data sheet.

## Detailed Description of Hardware

The  MAX17523A  EV  kit  is  a  fully  assembled  and  tested circuit  board  that  demonstrates  the  MAX17523A,  a  1A adjustable overcurrent and overvoltage protector IC in a 16-pin surface-mount TQFN-EP package.

Using jumper JU1, the EV kit circuit can be configured to evaluate  different  current-limit  thresholds  with  a  different resistor on SETI. Using jumpers JU3 to JU5, the EV kit circuit can be configured to evaluate the internal OVLO/UVLO threshold  or  external  threshold  using  a  resistor-divider. Using jumpers JU14 and JU15, the EV kit circuit can be configured to evaluate different current-limit types (autoretry, latchoff, and continuous). The EV kit also features a LED to indicate the power for logic pins.

The EV kit provides an on-board output electrolytic capacitor (C7) to enable demonstration of the MAX17523A protection features while charging large capacitor.

## Table 1. LED Indicator

| LED   | NAME   | DESCRIPTION                                                        |
|-------|--------|--------------------------------------------------------------------|
| LED1  | POWER  | LED1 is on when the V BUS /5V supply for the logic pins is powered |

## Table 2. Current-Limit Threshold (JU1)

| JUMPER   | SHUNT POSITION   | DESCRIPTION              |
|----------|------------------|--------------------------|
| JU1      | 1-2              | Current limit 0.15A      |
| JU1      | 3-4              | Current limit 0.5A       |
| JU1      | 5-6*             | Current limit 0.98A      |
| JU1      | 7-8              | Current limit adjustable |

*Default position.

## Table 3. UVLO/OVLO Threshold (JU3 to JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                     |
|----------|------------------|-----------------------------------------------------------------------------------------------------------------|
| JU3      | Installed*       | UVLO connected to ground. Internal UVLO threshold is selected.                                                  |
| JU3      | Not installed    | UVLO not connected to ground. Install JU5 to use external resistors to set UVLO threshold.                      |
| JU4      | Installed*       | OVLO connected to ground. Internal OVLO threshold is selected.                                                  |
| JU4      | Not installed    | OVLO not connected to ground. Install JU5 to use external resistors to set OVLO threshold.                      |
| JU5      | Installed        | Calculate and install R8 and R10 to set the UVLO/OVLO threshold before using external resistor divider feature. |
| JU5      | Not installed*   | Not using external resistors to set the OVLO/UVLO threshold.                                                    |

*Default position.

## Current-Limit Threshold

The EV kit features a jumper (JU1) to select the currentlimit  threshold.  Install  a  jumper  as  shown  in  Table  2  to change the current-limit threshold.

Use  the  following  equation  to  calculate  the  SETI  resistance for a desired current limit:

<!-- formula-not-decoded -->

## UVLO/OVLO Threshold

Use jumpers JU3 to JU5 to select UVLO and OVLO threshold. See Table 3 for jumper settings.

The UVLO threshold for input voltage is set through the R9, R10 resistive  divider.  Use  the  following  equation  to calculate  the  value  of  R10  for  a  required  undervoltage threshold level:

<!-- formula-not-decoded -->

where R9 can be chosen as 2.2MΩ, V UVLO\_F  is 1.222V, and VUVLO is the required undervoltage protection threshold.

The OVLO threshold for input voltage is set through the R11,  R12  resistive  divider.  Use  the  following  equation to calculate the value of R12 for a required overvoltage threshold level:

<!-- formula-not-decoded -->

where R11 can be chosen as 2.2MΩ, V OVLO\_R is 1.222V, and V OVLO  is the required overvoltage protection threshold.

│

## MAX17523A Evaluation Kit

## Switch Control

The EV kit features two jumpers (JU6, JU8) to enable or disable the switch. See Table 4 for jumper settings and Table 5 for switch status.

## Reverse-Current Block Enable

Use jumper JU9 to enable or disable the reverse-current flow  protection.  MAX17523A blocks any reverse current from the OUT to IN pin when RIEN is logic 0. See Table 6 for jumper settings.

## Table 4. Switch Control (JU6, JU8)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                         |
|----------|------------------|-----------------------------------------------------|
| JU6      | 1-2              | HVEN connected to IN through 100kΩ ( HVEN logic 1). |
| JU6      | 2-3*             | HVEN connected to ground ( HVEN logic 0).           |
| JU8      | Installed*       | EN connected to VBUS (EN Logic 1).                  |
| JU8      | Not Installed    | EN connected to ground through 100kΩ (EN Logic 0).  |

*Default position.

## Table 5. Enable Inputs

|   HVEN |   EN | SWITCH STATUS   |
|--------|------|-----------------|
|      0 |    0 | On              |
|      0 |    1 | On*             |
|      1 |    0 | Off             |
|      1 |    1 | On              |

*Default position.

## Table 6. Reverse-Current Block Enable (JU9)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                             |
|----------|------------------|---------------------------------------------------------|
| JU9      | Installed        | RIEN connected to VBUS ( RIEN logic 1).                 |
| JU9      | Not Installed*   | RIEN connected to ground through 100kΩ ( RIEN logic 0). |

*Default position.

Evaluates: MAX17523A

## Current-Limit Type Select

The EV kit features jumpers JU12, JU14, JU15 to select different current-limit type and sampled time. See Table 7 and Table 8 for jumper settings.

## Output Load Capacitor

Use jumper JU13 to connect output to 330µF capacitor. See Table 9 for jumper settings.

## Table 7. Current-Limit Type Select (JU12, JU14, JU15)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                   |
|----------|------------------|-------------------------------------------------------------------------------|
| JU12     | 1-2*             | CLTS_MODE logic 1. CLTS1 and CLTS2 are sampled continuously.                  |
| JU12     | 2-3              | CLTS_MODE logic 0. CLTS1 and CLTS2 are sampled only when V IN - V OUT < 0.6V. |
| JU14     | 1-2*             | CLTS1 logic 1.                                                                |
| JU14     | 2-3              | CLTS1 logic 0.                                                                |
| JU15     | 1-2              | CLTS2 logic 1.                                                                |
| JU15     | 2-3*             | CLTS2 logic 0.                                                                |

*Default position.

## Table 8. Logic Inputs

|   CLTS2 |   CLTS1 | CURRENT-LIMIT TYPE   |
|---------|---------|----------------------|
|       0 |       0 | Latchoff             |
|       0 |       1 | Autoretry            |
|       1 |       0 | Continuous           |
|       1 |       1 | Continuous           |

## Table 9. Output Load Capacitor (JU13)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                      |
|----------|------------------|--------------------------------------------------|
| JU13     | Installed Not    | OUT connected to C7 and C8. OUT not connected to |

*Default position.

│

## Typical Operating Characteristics

(V IN  = 24V, T A  = +25°C unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## Typical Operating Characteristics (continued)

<!-- image -->

(V IN  = 24V, T A  = +25°C unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

│

## Component Suppliers

| SUPPLIER                                  | WEBSITE                |
|-------------------------------------------|------------------------|
| Bourns, Inc.                              | www.bourns.com         |
| Sullins                                   | www.sullinscorp.com    |
| FCI Electronics Interconnection Solutions | www.fciconnect.com     |
| Keystone                                  | www.keyelco.com        |
| Diodes Incorporated                       | www.diodes.com         |
| Murata Americas                           | www.murata.com         |
| Panasonic Corp.                           | www.panasonic.com      |
| Phoenix Contact, Inc.                     | www.phoenixcontact.com |
| STMicroelectronics                        | www.us.st.com          |
| TDK Corp.                                 | www.component.tdk.com  |

Note: Indicate that you are using the MAX17523A EV Kit when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17523AEVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX17523A Evaluation Kit

## MAX17523A EV Kit Bill of Materials

| PART REFERENCE          |   QTY | DESCRIPTION                                                                                     | MANUFACTURER PART NUMBER                           |
|-------------------------|-------|-------------------------------------------------------------------------------------------------|----------------------------------------------------|
| C1, C2                  |     2 | 1µF 10% 25V X7R Ceramic Capacitors (0603)                                                       | TDK C1608X7R1E105K080AE, TAIYO YUDEN TMK107B7105KA |
| C3                      |     1 | 0.47µF 10% 50V X5R Ceramic Capacitors (0603)                                                    | TDK C1608X5R1H474K080AB                            |
| C4                      |     1 | 1µF 10% 50V X7R Ceramic Capacitors (1206)                                                       | MURATA GRM31CR71H105KA61, TDK CGA5L3X7R1H105K160AB |
| C7                      |     1 | 330µF 20% 50V Aluminium Electrolytic Capacitor (10mm)                                           | PANASONIC EEU-EB1H331                              |
| D1                      |     1 | TVS Diode, 600W (SMB)                                                                           | ST MICROELECTRONICS SM6T36CA                       |
| D2                      |     1 | Power Schottky Diode, 60V, 1A (SMA)                                                             | ST MICROELECTRONICS STPS1L60A                      |
| D3                      |     1 | Power Schottky Diode, 60V, 1A (SMA)                                                             | DIODES INCORPORATED B160-13-F                      |
| J1                      |     1 | USB B-Type Connector                                                                            | FCI CONNECT 61729-0010BLF                          |
| J2, J3                  |     2 | 2-Pin Green PC Terminal Block                                                                   | PHOENIX CONTACT 1729018                            |
| JU1                     |     1 | 2x4 Dual-Row Header, 0.1in centers, cut to fit                                                  | SULLINS ELECTRONICS PBC04DAAN                      |
| JU3-JU5, JU8, JU9, JU13 |     6 | 2-Pin Single-Row Header, 0.1in centers, cut to fit                                              | MOLEX 22-28-4023                                   |
| JU6, JU12, JU14, JU15   |     4 | 3-Pin Single-Row Header, 0.1in centers, cut to fit                                              | MOLEX 22-28-4033                                   |
| LED1                    |     1 | Green LED (1206)                                                                                | KINGBRIGHT APT3216SGC                              |
| R1                      |     1 | 1K OHM 1% resistors (0805)                                                                      | -                                                  |
| R2                      |     1 | 10K OHM 1% resistors (0805)                                                                     | -                                                  |
| R6                      |     1 | 40.2K OHM 1% resistors (0805)                                                                   | -                                                  |
| R7                      |     1 | 12.1K OHM 1% resistors (0805)                                                                   | -                                                  |
| R8                      |     1 | 6.2K OHM 1% resistors (0805)                                                                    | -                                                  |
| R9, R11                 |     2 | 2.2M OHM 5% resistors (0805)                                                                    | -                                                  |
| R13, R14, R17           |     3 | 100K OHM 1% resistors (0805)                                                                    | -                                                  |
| R15                     |     1 | 4.7K OHM 1% resistors (0805)                                                                    | -                                                  |
| R16                     |     1 | 50K OHM Trimmer Potentiometers                                                                  | BOURNS 3296W-1-503LF                               |
| TP1                     |     1 | White Test Point                                                                                | KEYSTONE 5002                                      |
| TP2, TP4, TP5, TP7      |     4 | Black Test Point                                                                                | KEYSTONE 5001                                      |
| TP3, TP6, TP8           |     3 | Red Test Point                                                                                  | KEYSTONE 5000                                      |
| TP9                     |     1 | Purple Test Point                                                                               | KEYSTONE 5119                                      |
| TP10                    |     1 | Green Test Point                                                                                | KEYSTONE 5116                                      |
| TP11                    |     1 | Grey Test Point                                                                                 | KEYSTONE 5118                                      |
| U1                      |     1 | 4.2V to 36V, 1A Current Limiter with OV, UV, Reverse Voltage Protection (16 Pin TQFN 3mm X 3mm) | MAX17523AATE+                                      |
| C8                      |     0 | Not Installed; 330µF 20% 50V Aluminium Electrolytic Capacitor (10mm)                            | PANASONIC EEU-EB1H331                              |
| R10, R12                |     0 | Not Installed; 1% resistors (0805)                                                              | -                                                  |
| PCB                     |     1 | PCB: MAX17523A Evaluation Kit                                                                   | -                                                  |

Evaluates: MAX17523A

## MAX17523A EV Kit Schematic

<!-- image -->

## MAX17523A Evaluation Kit

## MAX17523A EV Kit PCB Layout

MAX17523A EV Kit PCB Layout-Silkscreen Top

<!-- image -->

MAX17523A EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX17523A EV Kit PCB Layout-Top Layer

<!-- image -->

MAX17523A EV Kit PCB Layout-Silkscreen Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX17523A