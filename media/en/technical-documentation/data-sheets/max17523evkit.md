<!-- lastmod 2022-08-03 -->
## MAX17523 Evaluation Kit

## General Description

The MAX17523 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX17523 adjustable  overcurrent  and  overvoltage  protector.  The EV kit  features TVS  diode  on  input  and  Schottky  diode on output. Input power to the EV kit uses a 4.5V to 36V input supply.

The EV kit circuit can be configured to demonstrate the device's different current-limit types, adjustable overvoltage, undervoltage, and current-limit threshold.

## Features

- 4.5V to 36V Operating Voltage Range
- Features TVS Diode and Schottky Diode
- Evaluates Three Current-Limit Types, Current-Limit Threshold, OVLO, and UVLO
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX17523

## Quick Start

## Required Equipment

- MAX17523 EV kit
- 36V DC power supply
- Multimeter
- USB-A male to USB-B male cable or 5V DC power supply

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions.
- 2) Connect the USB cable to J1 from a computer or connect a 5V DC power supply to TP3.
- 3) Verify that LED1 is on.
- 4) Connect a 20V DC power supply to IN. Verify that OUT is 20V.
- 5) Increase voltage on the DC power supply and verify that the OUT voltage goes down and FLAG goes low when input reaches approximately 33V.
- 6) Decrease voltage on the DC power supply and verify that OUT goes back and FLAG goes high when the input reaches approximately 32V.

<!-- image -->

## MAX17523 Evaluation Kit

## Detailed Description of Hardware

The  MAX17523  EV  kit  is  a  fully  assembled  and  tested circuit  board  that  demonstrates  the  MAX17523  1A adjustable overcurrent and overvoltage protector IC in a 16-pin surface-mount TQFN-EP package.

Using jumper JU1, the EV kit circuit can be configured to evaluate  different  current-limit  thresholds  with  a  different resistor on SETI. Using jumpers JU3-JU5, the EV kit circuit can  be  configured  to  evaluate  the  internal  OVLO/UVLO threshold  or  external  threshold  using  a  resistor-divider. Using jumpers JU14 and JU15, the EV kit circuit can be configured to evaluate different current-limit types (autoretry, latchoff, and continuous). The EV kit also features an LED to indicate the power for logic pins.

## Table 1. LED Indicator

| LED   | NAME   | DESCRIPTION                                                        |
|-------|--------|--------------------------------------------------------------------|
| LED1  | POWER  | LED1 is on when the V BUS /5V supply for the logic pins is powered |

## Table 3. UVLO/OVLO Threshold (JU3-JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                |
|----------|------------------|--------------------------------------------------------------------------------------------|
| JU3      | Installed*       | UVLO connected to ground. Internal UVLO threshold is selected.                             |
| JU3      | Not installed    | UVLO not connected to ground. Install JU5 to use external resistors to set UVLO threshold. |
| JU4      | Installed*       | OVLO connected to ground. Internal OVLO threshold is selected.                             |
| JU4      | Not installed    | OVLO not connected to ground. Install JU5 to use external resistors to set OVLO threshold. |
| JU5      | Installed        | Use external resistors to set the OVLO/UVLO threshold.                                     |
| JU5      | Not installed*   | Not using external resistors to set the OVLO/UVLO threshold.                               |

## Table 4. Switch Control (JU6, JU8)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                           |
|----------|------------------|---------------------------------------|
| JU6      | 1-2              | HVEN connected to IN through 100kΩ.   |
| JU6      | 2-3*             | HVEN connected to ground.             |
| JU8      | Installed*       | EN connected to VBUS.                 |
| JU8      | Not installed    | EN connected to ground through 100kΩ. |

Evaluates: MAX17523

## Current-Limit Threshold

The EV kit features a jumper (JU1) to select current-limit threshold. Install a jumper as shown in Table 2 to change the current-limit threshold.

Use the following equation to calculate the current limit:

<!-- formula-not-decoded -->

## UVLO/OVLO Threshold

Use jumpers JU3-JU5 to select UVLO and OVLO threshold. See Table 3 for jumper settings.

## Switch Control

The EV kit features two jumpers (JU6, JU8) to enable or disable the switch. See Table 4 for jumper settings and Table 5 for switch status.

## Table 2. Current-Limit Threshold (JU1)

*Default position.

| JUMPER   | SHUNT POSITION   | DESCRIPTION              |
|----------|------------------|--------------------------|
| JU1      | 1-2*             | Current limit 0.15A      |
| JU1      | 3-4              | Current limit 0.5A       |
| JU1      | 5-6              | Current limit 0.98A      |
| JU1      | 7-8              | Current limit adjustable |

## Table 5. Enable Inputs

|   HVEN |   EN | SWITCH STATUS   |
|--------|------|-----------------|
|      0 |    0 | On              |
|      0 |    1 | On              |
|      1 |    0 | Off             |
|      1 |    1 | On              |

│

## MAX17523 Evaluation Kit

## Reverse-Current Block Enable

Use jumper JU9 to enable or disable the reverse-current flow  protection.  The  reverse-current  block  is  enabled when RIEN is logic-low. See Table 6 for jumper settings.

## Current-Limit Type Select

The EV kit features jumpers JU12, JU14, JU15 to select different current-limit type and sampled time. See Table 7 for jumper settings.

## Table 6. Reverse-Current Block Enable (JU9)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                      |
|----------|------------------|--------------------------------------------------|
| JU9      | Installed Not    | RIEN connected to VBUS. RIEN connected to ground |

## Table 7. Current-Limit Type Select (JU12, JU14, JU15)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                               |
|----------|------------------|---------------------------------------------------------------------------|
| JU12     | 1-2*             | CLTS_MODE high. CLTS1 and CLTS2 are sampled continuously.                 |
| JU12     | 2-3              | CLTS_MODE low. CLTS1 and CLTS2 are sampled only when V IN - V OUT < 0.6V. |
| JU14     | 1-2*             | CLTS1 high.                                                               |
| JU14     | 2-3              | CLTS1 low.                                                                |
| JU15     | 1-2              | CLTS2 high.                                                               |
| JU15     | 2-3*             | CLTS2 low.                                                                |

Evaluates: MAX17523

## Output Load Capacitor

Use jumper JU13 to connect output to 330µF capacitor. See Table 9 for jumper settings.

## Table 8. Logic Inputs

|   CLTS2 |   CLTS1 | CURRENT-LIMIT TYPE   |
|---------|---------|----------------------|
|       0 |       0 | Latchoff             |
|       0 |       1 | Autoretry            |
|       1 |       0 | Continuous           |
|       1 |       1 | Continuous           |

## Table 9. Output Load Capacitor (JU13)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                     |
|----------|------------------|---------------------------------|
| JU13     | Installed        | OUT connected to C7 and C8.     |
| JU13     | Not installed*   | OUT not connected to C7 and C8. |

│

## Component Suppliers

| SUPPLIER                                  | WEBSITE                |
|-------------------------------------------|------------------------|
| Bourns, Inc.                              | www.bourns.com         |
| Fairchild Semiconductor                   | www.fairchildsemi.com  |
| FCI Electronics Interconnection Solutions | www.fciconnect.com     |
| Lite-On, Inc.                             | www.us.liteon.com      |
| Lumex Inc.                                | www.lumex.com          |
| Murata Americas                           | www.murata.com         |
| Panasonic Corp.                           | www.panasonic.com      |
| Phoenix Contact, Inc.                     | www.phoenixcontact.com |
| STMicroelectronics                        | www.us.st.com          |
| TDK Corp.                                 | www.component.tdk.com  |

Note: Indicate that you are using the MAX17523EV when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17523EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX17523

## MAX17523 EV Kit Bill of Materials

| PART REFERENCE          |   QTY | DESCRIPTION                                                                                    | MANUFACTURER PART NUMBER                           |
|-------------------------|-------|------------------------------------------------------------------------------------------------|----------------------------------------------------|
| C1                      |     1 | 1µF 10% 25V X7R Ceramic Capacitors (0603)                                                      | MURATA GRM188R71E105KA12, TDK CGA3E1X7R1E105K      |
| C3                      |     1 | 0.47µF 10% 50V X5R Ceramic Capacitors (0603)                                                   | TDK C1608X5R1H474K080AB                            |
| C4                      |     1 | 1µF 10% 50V X7R Ceramic Capacitors (1206)                                                      | MURATA GRM31CR71H105KA61, TDK CGA5L3X7R1H105K160AB |
| C7                      |     1 | 330µF 20% 50V Aluminium Electrolytic Capacitor (10mm)                                          | PANASONIC EEU-EB1H331                              |
| D1                      |     1 | TVS Diode, 600W (SMB)                                                                          | ST MICROELECTRONICS SM6T36CA                       |
| D2                      |     1 | Power Schottky Diode, 60V, 1A (SMA)                                                            | ST MICROELECTRONICS STPS1L60A                      |
| D3                      |     1 | Power Schottky Diode, 60V, 1A (SMA)                                                            | DIODES INCORPORATED B160-13-F                      |
| J1                      |     1 | USB B-Type Connector                                                                           | FCI CONNECT 61729-0010BLF                          |
| J2, J3                  |     2 | 2-Pin Green PC Terminal Block                                                                  | DEGSON ELECTRONICS DG128-5.0-02P-14                |
| JU1                     |     1 | 2x4 Dual-Row Header, 0.1in centers, cut to fit                                                 | SULLINS ELECTRONICS PBC04DAAN                      |
| JU3-JU5, JU8, JU9, JU13 |     6 | 2-Pin Single-Row Header, 0.1in centers, cut to fit                                             | MOLEX 22-28-4023                                   |
| JU6, JU12, JU14, JU15   |     4 | 3-Pin Single-Row Header, 0.1in centers, cut to fit                                             | MOLEX 22-28-4033                                   |
| LED1                    |     1 | Green LED (1206)                                                                               | KINGBRIGHT APT3216SGC                              |
| R1                      |     1 | 1K OHM 1% resistors (0805)                                                                     | -                                                  |
| R2                      |     1 | 10K OHM 1% resistors (0805)                                                                    | -                                                  |
| R6                      |     1 | 40.2K OHM 1% resistors (0805)                                                                  | -                                                  |
| R7                      |     1 | 12.1K OHM 1% resistors (0805)                                                                  | -                                                  |
| R8                      |     1 | 6.2K OHM 1% resistors (0805)                                                                   | -                                                  |
| R9, R11                 |     2 | 2.2M OHM 5% resistors (0805)                                                                   | -                                                  |
| R13, R14, R17           |     3 | 100K OHM 1% resistors (0805)                                                                   | -                                                  |
| R15                     |     1 | 4.7K OHM 1% resistors (0805)                                                                   | -                                                  |
| R16                     |     1 | 50K OHM Trimmer Potentiometers                                                                 | BOURNS 3296W-1-503LF                               |
| TP1                     |     1 | White Test Point                                                                               | KEYSTONE 5002                                      |
| TP2, TP4, TP5, TP7      |     4 | Black Test Point                                                                               | KEYSTONE 5001                                      |
| TP3, TP6, TP8           |     3 | Red Test Point                                                                                 | KEYSTONE 5000                                      |
| TP9                     |     1 | Purple Test Point                                                                              | KEYSTONE 5119                                      |
| TP10                    |     1 | Green Test Point                                                                               | KEYSTONE 5116                                      |
| TP11                    |     1 | Grey Test Point                                                                                | KEYSTONE 5118                                      |
| U1                      |     1 | 1A Adjustable Overcurrent and Overvoltage Protector with High Accuracy (16 Pin TQFN 3mm X 3mm) | MAX17523ATE+                                       |
| C8                      |     0 | Not Installed; 330µF 20% 50V Aluminium Electrolytic Capacitor (10mm)                           | PANASONIC EEU-EB1H331                              |
| R10, R12                |     0 | Not Installed; 1% resistors (0805)                                                             | -                                                  |
| PCB                     |     1 | PCB: MAX17523 Evaluation Kit                                                                   | -                                                  |

Evaluates: MAX17523

## MAX17523 EV Kit Schematics

<!-- image -->

## MAX17523 EV Kit PCB Layout

MAX17523 EV Kit-Silkscreen Top

<!-- image -->

MAX17523 EV Kit-Bottom Layer

<!-- image -->

MAX17523 EV Kit-Top Layer

<!-- image -->

MAX17523 EV Kit-Silkscreen Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                 | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------|-----------------|
|                 0 | 12/16           | Initial release                                             | -               |
|                 1 | 4/20            | Replaced the Bill of Materials , Schematic , and PCB Layout | 5-8             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses arH LPSOLHG. 0a[LP ,QtHgratHG rHVHrYHV thH rLght to chaQgH thH cLrcuLtr\ aQG VSHcL¿catLoQV ZLthout QotLcH at aQ\ tLPH.

<!-- image -->

│

Evaluates: MAX17523