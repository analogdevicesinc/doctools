<!-- lastmod 2022-08-02 -->
## MAXM17515 Evaluation Kit

## General Description

The MAXM17515 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the typical 5A application  circuit  of  the  MAXM17515.  The  MAXM17515  is a  fixed-frequency,  integrated  inductor,  step-down  power module for low-voltage, low-power applications.

The EV kit provides a 1.5V output voltage from a 2.4V to 5.5V input range and delivers up to 5A output current while achieving greater than 91.2% efficiency. The EV kit operates at a 1MHz switching frequency and has superior line and load-transient response. The EV kit also allows the  evaluation  of  other  adjustable  output  voltages  from 0.75V to 3.6V by changing resistors R1 and R2.

Ordering Information appears at end of data sheet.

## Features

- High-Integration Solution/Integrated Shielded Inductor
- 2.4V to 5.5V Input Range
- Configured for 1.5V Output Voltage
- Adjustable Output-Voltage Range (0.75V to 3.6V)
- 5A Output Current
- 91.2% Efficiency (V IN  = 3.3V, V OUT  = 1.5V at 1.5A)
- 1MHz Switching Frequency
- Enable Input
- Power-Good Output Indicator (POK)
- Low-Profile, Surface-Mount Components
- Proven PCB Layout
- Fully Assembled and Tested

<!-- image -->

Evaluates: MAXM17515,

## 5A Integrated Power Module

## MAXM17515 Evaluation Kit

## Quick Start

## Recommended Equipment

- MAXM17515 EV kit
- 2.4V to 5.5V DC power supply (V IN )
- 5V DC power supply (V CC )
- Dummy load capable of sinking 5A
- Digital multimeter (DMM)
- 100MHz dual-trace oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Ensure  that  the  circuit  is  connected  correctly  to  the supplies and dummy load prior to applying any power.
- 2)  Verify that a shunt is installed across jumper JU1.
- 3)  Enable the power supply (V IN  = 5V).
- 4)  Observe  the  1.5V  output  with  the  DMM  and/or oscilloscope.  Look  at  the  EP2  switching  node  while varying the load current.

## Detailed Description of Hardware

## Input Supply Voltage

The EV kit can operate from a minimum 4.5V single DC power supply at the V IN  PCB pad with a shunt installed across  JU1.  The  EV  kit  is  also  configured  to  power  a lower input voltage at the V IN  PCB pad, which requires an additional 5V power supply at V CC  PCB pad, a capacitor, (C4) to be installed, and a connecting trace between V IN and V CC  (next to R3's footprint) to be cut. Table 1 lists all operating configurations of the EV kit at different input voltage sources.

The electrolytic capacitor (C1) is required only when the VIN  power  supply  is  situated  far  from  the  MAXM17515 circuit. On the bottom layer, additional footprints of optional components are included to ease board modification for different input/output configurations.

## Enable Input

The EV kit features a 2-pin jumper (JU1) that selects the enable/disable control input. The shunt is installed across JU1 to enable the device and vice versa.

## Switching Frequency (FREQ)

The  EV  kit  features  a  PWM-mode  switching  frequency. The switching frequency is fixed at 1MHz.

## Programming the Output Voltage

The EV kit includes a default output programmed at 1.5V and  also  produces  an  adjustable  0.75V  to  3.6V  output voltage by connecting FB to a resistive divider. To obtain an  output  voltage  other  than  the  default  programmed output, simply modify the R1 and R2 resistors with values according to the following equation:

<!-- formula-not-decoded -->

where V FB  = 0.75V. Output capacitance selection changes are required for either an output voltage greater than 2V or  the  capacitor  temperature  rises  above  105°C.  Refer to the MAXM17515 IC data sheet for output capacitance selection.

## Table 1. Jumper JU1 Functions

| SHUNT (JU1) POSITION   | V IN /V CC RANGE                                              | REGULATOR OUTPUT   |
|------------------------|---------------------------------------------------------------|--------------------|
| Installed              | V IN = 4.5V to 5.5V VCC = VIN                                 | Enabled            |
| Installed              | V IN = 2.4V to 5.5V Require an additional V CC = 4.5V to 5.5V | Enabled            |
| Not installed*         | V IN = 2.4V to 5.5V V CC = V IN                               | Disabled           |

## Evaluates: MAXM17515, 5A Integrated Power Module

## MAXM17515 Evaluation Kit

## Typical Operating Characteristics

(V CC  = 5V, V IN  = 3.3V to 5V, V OUT  = 1.5V, I OUT  = 0-5A, T A  = +25°C, unless otherwise noted.)

<!-- image -->

LOAD CURRENT TRANSIENT RESPONSE (VIN = 5V, VOUT = 1.5V, IOUT = 2.5A TO 5A)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAXM17515,

5A Integrated Power

Module

## MAXM17515 Evaluation Kit

## Component Suppliers

| SUPPLIER                   | WEBSITE               |
|----------------------------|-----------------------|
| Keystone Electronics Corp. | www.keyelco.com       |
| Lite-On, Inc.              | www.liteon.com        |
| Murata Americas            | www.murata.com        |
| Panasonic Corp.            | www.panasonic.com     |
| TDK Corp.                  | www.component.tdk.com |

Note:

Indicate that you are using the MAXM17515 when contacting these component suppliers.

## Component List and Schematic

Refer to the following files attached to this data sheet for component information and schematic:

- MAXM17515\_EV\_BOM.xls
- MAXM17515\_Schematic.pdf

Evaluates: MAXM17515,

5A Integrated Power

Module

Figure 1. MAXM17515 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 2. MAXM17515 EV Kit Component Placement GuideSolder Side

Figure 3. MAXM17515 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAXM17515 EV Kit PCB Layout-PGND Layer 2

<!-- image -->

Figure 5. MAXM17515 EV Kit PCB Layout-PGND Layer 3

Figure 6. MAXM17515 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM17515EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAXM17515 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

Evaluates: MAXM17515,

5A Integrated Power Module