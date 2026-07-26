<!-- lastmod 2022-08-03 -->
<!-- image -->

## High-Speed Data Converter Evaluation Platform (HSDCEP) User Guide

## Evaluates: RF-DACs ( &gt; 1.5Gsps) and DUCs

## General Description

The  high-speed  data  converter  evaluation  platform (HSDCEP)  is  a  PC-based  platform  that  provides  a comprehensive  tool  for  evaluating  Maxim's  RF  digitalto-analog converters (RF-DACs) that have update rates R 1.5Gsps  and  Maxim's  digital  upconverters  (DUCs). The  HSDCEP  generates  test  patterns  at  rates  of  up to  1.25Gbps  per  data  pin  pair,  on  up  to  four  parallel 16-bit  LVDS  buses.  A  data  pattern  with  a  maximum length  of  64  mega-words  (Mw),  with  each  word  being 16  bits  wide,  can  be  uploaded  to  the  HSDCEP  memory  over  a  USB  2.0  port.  The  HSDCEP  uses  a  highspeed  Xilinx M Virtex M -5  FPGA  to  play  back  the  data pattern to the DAC or DUC under evaluation.

The HSDCEP operates from a single 5V, 6A supply.

The HSDCEP software runs on PCs using the Windows XP M (SP2 or later) operating system with a USB 2.0 port.

Ordering Information appears at end of data sheet.

Figure 1. HSDCEP Block Diagram (Showing Functionality of the Board) and DAC Evaluation Kit

<!-- image -->

Xilinx and Virtex are registered trademarks of Xilinx, Inc. Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

Features

- S Evaluates Maxim RF-DACs (&gt; 1.5Gsps) and DUCs
- S Four Parallel 16-Bit Output Buses (LVDS)
- S Eight Clock-Capable Ports (LVDS)
- S Output Rate Up to 1.25Gwps (LVDS) Per Output Bus
- S 64M x 16-Bit Words Pattern Storage
- S FPGA Configuration Stored on the PC and Downloaded Through the USB Port
- S USB 2.0 Communication (480Mbps)
- S Single 5V Supply Operation (Power Supply Included)
- S LEDs to Display DUT and FPGA Status
- S Simple Command-Prompt Software Interface (Enables Scripting to Run Command Sequences)
- S FPGA Temperature Monitoring

## High-Speed Data Converter Evaluation Platform (HSDCEP) User Guide

Evaluates: RF-DACs ( &gt; 1.5Gsps) and DUCs

## ABSOLUTE MAxIMUM RATInGS

5V DC1   ...................................................................................5.5V

Continuous Power Dissipation (T A  = +25°C)  .......................33W

Operating Temperature Range ............................. 0°C to +35°C

Storage Temperature Range  ............................ -60°C to +125°C

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL ChARACTERISTICS

(5V DC1  = 5V, data output word rate = 4.6Gwps.)

| PARAMETER                | SYMBOL   | COnDITIOnS   |   MIn |   TYP | MAx   | UnITS   |
|--------------------------|----------|--------------|-------|-------|-------|---------|
| Minimum DATACLK Rate     |          |              |       |       | 120   | MHz     |
| Maximum DATACLK Rate     |          |              |   625 |       |       | MHz     |
| Maximum Output Word Rate |          | 4 port       |   5.0 |       |       | Gwps    |
| Output Bus Width         |          |              |       |    16 |       | Bits    |
| Pattern Length           |          |              |   256 |       | 64M   | Words   |
| Pattern Block Resolution |          |              |       |   256 |       | Words   |
| Output Data Jitter       |          |              |       |   200 |       | ps P-P  |
| Supply Voltage Range     | 5V DC1   |              |  4.75 |   5.0 | 5.25  | V       |
| Supply Current           |          | (Note 1)     |       |   5.2 |       | A       |

note 1: HSDCEP-powered, Maxim-supplied FPGA firmware loaded, and active heat sink operating.

## Table 1. Board Connector and Switch Description

| DESIGnATIOn    | DESCRIPTIOn                                                                                     |
|----------------|-------------------------------------------------------------------------------------------------|
| 5V DC1         | External 5.0V power-supply connection. Connect a 5V, 6A power supply to this connector.         |
| J1             | USB 2.0 port.                                                                                   |
| J2, J3, J8-J13 | Do not connect-for future use.                                                                  |
| J5, J6         | High-speed output bus connector. The pinout of this connector is EV Kit/FPGA-firmware specific. |
| SW1            | USB communications reset.                                                                       |
| SW4            | FPGA reset. Memory patterns must be reloaded after reset.                                       |

## High-Speed Data Converter Evaluation

## Platform (HSDCEP) User Guide

## Evaluates: RF-DACs ( &gt; 1.5Gsps) and DUCs

Figure 2. High-Speed Data Converter Evaluation Platform (PCB Photo)

<!-- image -->

## Quick Start

## Required Equipment

- HSDCEP board
- 5V, 6A DC power supply (included)
- User-supplied PC running Windows XP (SP2 or later) with a spare USB 2.0 port

The HSDCEP kit is a pattern source for Maxim's RF digitalto-analog converters (RF-DACs) that have update rates R 1.5Gsps and Maxim's digital upconverters (DUCs).

note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the HSDCEP software. Text in bold and underlined refers to items from the Windows operating system.

## Hardware Installation Procedure

Follow the steps below to verify board operation. Caution: Do  not  apply  power  to  the  board  until  all  connections have been established.

- 1)  Complete  software  installation.  See  the Software Installation section.
- 2)  Connect  the  supplied  power  supply  with  supplied cable to connector 5V DC1 .
- 3)  Connect  a  USB  cable  to  the  PC  and  J1  of  the HSDCEP.  The  PC  displays Maxim  Data  Converter Evaluation indicating  the  HSDCEP  has  been  connected,  and  requests  to  install  the  hardware  driver (see the Driver Installation section for guidance).
- 4)  Connect the DAC/DUC-specific daughter card to the HSDCEP at J5 and J6. Refer to the respective DAC/ DUC EV kit data sheet for proper connections.
- 5)  Apply power to the DAC/DUC EV kit.
- 6)  Apply power to the HSDCEP board.
- 7) The  board  is  now  ready  for  commands  to  test  the specific DAC/DUC.

## High-Speed Data Converter Evaluation Platform (HSDCEP) User Guide Evaluates: RF-DACs ( &gt; 1.5Gsps) and DUCs

## Basic DAC Command-Line Control

The  minimum  command  set  necessary  to  use  the HSDCEP with a Maxim RF DAC is shown in Figure 3. The commands shown include powering up the board, loading  the  FPGA configuration, uploading the test pattern, and starting the playback.

## Detailed Description of Hardware

The HSDCEP interfaces to Maxim's high-speed DAC EV kits using an LVDS data interface and Maxim's DUC EV kits using a CMOS interface.

The  HSDCEP  is  controlled  by  a  PC  running  Windows XP  SP2  (or  compatible  operating  system)  with  a  USB 2.0 port and Maxim's proprietary software. The software uses a simple command-line interface that enables users to write DOS-style batch files or make system calls from a  scripting  or  compiled  programming  language,  such as MATLAB M or  C++. Each HSDCEP is distributed with installation software that includes the drivers for the USB port and the command-line software.

A single 5V, 6A power supply is required. The HSDCEP software  controls  the  programming  of  the  on-board voltage  levels.  The  output  bus  can  be  independently powered up and down through software to allow switching of DAC evaluation boards without removing power to the HSDCEP.

Product-specific  FPGA  firmware  is  distributed  for  use with  the  HSDCEP.  The  firmware  sets  up  the  interfaces for pattern storage from the PC and pattern playback to the DAC.

Figure  2  shows  the  locations  of  connectors,  switches, and status LEDs on the HSDCEP. Main board power is supplied  through  the  connector  labeled  5V DC1 .  J1  is the  USB  cable  connector  and  J5  and  J6  are  the  DUT interface headers.

## Output Interface Connector

J5 and J6 connect the HSDCEP to the DAC/DUC under test. The output interface contains four banks of 18 LVDS pairs  from  the  FPGA.  Each  set  of  signals  includes  two clock-capable pairs for a clock input or clock outputs.

J5  and  J6  are  Samtec  QTH-060-01-L-D-A  connectors. Through  holes  for  mechanically  securing  the  HSDCEP and  the  DAC/DUC  evaluation  board  together  are  provided. For direct and reliable interfacing, mechanical fastening is recommended. The mating connector is Samtec QSH-060-01-L-D-A.

## USB Interface Connector

The HSDCEP communicates through the PC's USB 2.0 port for high-speed data transport. The USB port on the HSDCEP is connector J1 (a type-B USB connector). The HSDCEP draws less than 100mA of current from J1 to power the HSDCEP's USB interface circuitry.

Figure 3. Screen Capture of Commands Needed for Running a DAC

<!-- image -->

MATLAB is a registered trademark of MathWorks, Inc.

## high-Speed Data Converter Evaluation

## Platform (hSDCEP) User Guide

## Evaluates: RF-DACs ( &gt; 1.5Gsps) and DUCs

## 5VDC1 Power Connector

Main  board  power  is  supplied  through  the  power  connector labeled 5V DC1 . The nominal power-supply voltage is 5V. Current draw through the connector is dependent on the FPGA firmware loaded, and the speed at which the  FPGA  is  clocked.  Typical  current  for  the  HSDCEP, when fully powered and running at 4.6Gwps, is 5.2A.

## Switches

There are four switches on the HSDCEP. SW1 resets the USB communication circuits and SW4 resets the FPGA (firmware  dependent).  Test  patterns  must  be  reloaded after the FPGA has been reset.

SW2 and SW3 perform DAC-specific functions (refer to the respective DAC IC data sheet for details).

## Status LEDs

The HSDCEP contains two sets of LEDs that are used to indicate the status of the FPGA. The definition depends on  the  firmware.  Table  2  provides  a  basic  description (refer to the respective DAC-firmware documentation for the specifics).

## Table 2. Basic LED Definitions

| LED LABEL    | FUnCTIOn                                                                                                                                          | FUnCTIOn                                                                                                                                          | FUnCTIOn                                                                                                                                          |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| DIAG1        | Vector-done status (normally on), except when the patterns are being loaded into memory.                                                          | Vector-done status (normally on), except when the patterns are being loaded into memory.                                                          | Vector-done status (normally on), except when the patterns are being loaded into memory.                                                          |
| DIAG2        | Data destination.                                                                                                                                 | Data destination.                                                                                                                                 | Data destination.                                                                                                                                 |
| DIAG3, DIAG4 | DIAG3                                                                                                                                             | DIAG4                                                                                                                                             | DRAM STATUS                                                                                                                                       |
| DIAG3, DIAG4 | Off                                                                                                                                               | Off                                                                                                                                               | NOP                                                                                                                                               |
| DIAG3, DIAG4 | Off                                                                                                                                               | On                                                                                                                                                | FPGA write mode                                                                                                                                   |
| DIAG3, DIAG4 | On                                                                                                                                                | Off                                                                                                                                               | FPGA read mode                                                                                                                                    |
| DIAG5        | DAC clock error. The FPGA's DCM has not locked to the DAC data clock. Stop and restart the data pattern after verification of data clock to FPGA. | DAC clock error. The FPGA's DCM has not locked to the DAC data clock. Stop and restart the data pattern after verification of data clock to FPGA. | DAC clock error. The FPGA's DCM has not locked to the DAC data clock. Stop and restart the data pattern after verification of data clock to FPGA. |
| DIAG6-DIAG8  | Internal FPGA error. Reset FPGA with SW4 and reload data pattern.                                                                                 | Internal FPGA error. Reset FPGA with SW4 and reload data pattern.                                                                                 | Internal FPGA error. Reset FPGA with SW4 and reload data pattern.                                                                                 |

## Detailed Description of Software

## Software Installation

The  HSDCEP  is  distributed  with  two  setup  files.  The HSDCEP.msi setup file contains the hardware drivers  and  HSDCEP  program.  When  executed,  the setup file runs the software installation routine that loads the  software  to  the  local  computer  and  sets  system environment  variables.  The  MAXyyyyy.msi  setup  file contains the FPGA firmware to be placed in the HSDCEP setup directory (MAXyyyyy is Maxim Part Number under test).

Follow typical installation instructions for the program and FPGA firmware installation.

note: Upon  first-time  use,  a new  hardware  Wizard installs the drivers. See the Driver Installation section.

## Driver Installation

Windows requests to install the hardware driver the first time  the  HSDCEP  is  connected  to  the  computer.  See Figures 4, 5, and 6 for driver installation procedure and follow instructions in each figure.

## High-Speed Data Converter Evaluation Platform (HSDCEP) User Guide

## Evaluates: RF-DACs ( &gt; 1.5Gsps) and DUCs

<!-- image -->

Figure 4. Found New Hardware Wizard-Start Hardware Driver Installation (select No, not this time , and click Next to continue) Allow Windows to install the software automatically.

Figure 5. Install Software Automatically (click Next to continue) Note: The driver is not registered with Microsoft; therefore, a warning message appears next.

<!-- image -->

Figure 6. Driver Warning Message (click Continue Anyway to complete installation)

<!-- image -->

## Software Control

This  section  describes  the  software  interface  to  the HSDCEP.  The  interface to  the  HSDCEP  board  is command-line  driven  using  the  Windows  command prompt.  Use  simple  commands  such  as hsdcep  / lfpga  MAxyyyyy\_DDR.bit to  load  the  FPGA  firmware file.  Control  of  the  HSDCEP can be enabled from other applications by making system calls.

The  results  of  the  command,  FPGA,  and  board  status are  reported  in  the  status.txt  file.  This  file  is  located  in the  directory  from  which  the  HSDCEP  command  was executed and reports the status from the last call.

## High-Speed Data Converter Evaluation Platform (HSDCEP) User Guide

## Evaluates: RF-DACs (

## &gt; 1.5Gsps) and DUCs

## HSDCEP Program Command Listing

The  commands for  the  HSDCEP  are  listed  in  Table  3.  The  command  is  listed  in bold format.  Required  command parameters are listed in bold italic format. Optional command parameters are listed in Italic format. Examples of select commands are provided at the bottom of the list.

## Example (Using MAx5882)

The following sequence is used to initialize the HSDCEP, load the FPGA configuration, load a test pattern, and start the pattern running:

hSDCEP /powerup

(Power up HSDCEP)

hSDCEP /lfpga MAX5882\_DDR\_rev00.bit

(Load FPGA configuration)

hSDCEP /lm MAX5882EVK\_8C\_399920141\_fs\_4.604701Gsps.txt

(Load pattern file)

hSDCEP /setreg 6 6

(Enable MAX5882 DLL)

hSDCEP /start

(Start looping test pattern)

## Table 3. hSDCEP Programming Commands

| COMMAnD               | FUnCTIOn                                                                                                                                                                                                                                                                                                                                                              |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /powerup              | Powers on the HSDCEP board.                                                                                                                                                                                                                                                                                                                                           |
| /lfpga fw_file        | Loads the FPGA firmware file. This allows the user to specify which configuration to download the FPGA. fw_file is the name of the file that contains the FPGA configuration. The status/success                                                                                                                                                                      |
| /lm pattern_file      | which must be in the current directory or include the path to the file. For example, pattern_file can be MyTestPattern.txt or C:/MyTestPattern.txt , or similar. The pattern length must be an integer multiple of 256 16-bit words. The maximum pattern length is 64Mvectors. See the Data Pattern File Format section for details on the pattern file requirements. |
| /start                | Starts the playback of the pattern to the DAC.                                                                                                                                                                                                                                                                                                                        |
| /stop                 | Stops the playback of the pattern to the DAC.                                                                                                                                                                                                                                                                                                                         |
| /lopowerdown          | Powers down only the output interface. Use this command when switching DUTs.                                                                                                                                                                                                                                                                                          |
| /lopowerup            | Powers up only the output interface. Use this command when switching DUTs.                                                                                                                                                                                                                                                                                            |
| /powerdown            | Powers down the FPGA and DRAM supplies on the HSDCEP.                                                                                                                                                                                                                                                                                                                 |
| /powerupset VIOSupply | Sets the FPGA I/O supply level to VIOSupply . Valid values for VIOSupply are 1.5, 1.8, 2.5, and 3.3. LVDS interfaces require 2.5V, which is the default ( VIOSupply = 2.5 ). Typical CMOS levels use 1.8V.                                                                                                                                                            |
| /dm output_file       | Reads from the HSDCEP the contents of the DRAM and writes the value in decimal format to output_file . The first line of the file contains the number of words downloaded. The status/success of the command is written to status.txt.                                                                                                                                |
| /swreset              | Executes the FPGA's software reset. The /lm command must be executed after this command prior to executing a /start command.                                                                                                                                                                                                                                          |
| /status               | Reads the status of the HSDCEP and writes the results to the local file status.txt.                                                                                                                                                                                                                                                                                   |
| /setreg RegAdd RegVal | Sets the contents of register address RegAdd to RegVal .                                                                                                                                                                                                                                                                                                              |

## High-Speed Data Converter Evaluation Platform (HSDCEP) User Guide &gt; 1.5Gsps) and DUCs

## Evaluates: RF-DACs (

## Data Pattern File Format

The first line of the pattern file used for loading and downloading the memory contains the number of words in the file. The number of words written to the memory must be an  integer  multiple  of  256.  The  subsequent  lines  after the first line are the individual integer words for the pattern. Each word is an integer representation of the offset binary value of the desired bit pattern (MSB justified for 16-bit  word  width),  so  when  the  HSDCEP  is  used  with a 12-bit device, each data word is shifted left by 4 bits (multiplied by 16). Each line must also be terminated with a carriage return and linefeed.

| DATA In FILE   | FILE LInE nO. (Line numbers are not part of file)   |
|----------------|-----------------------------------------------------|
| 4096           | 1 (number of words)                                 |
| 0              | 2                                                   |
| 16             | 3                                                   |
| 32             | 4                                                   |
| .              | .                                                   |
| .              | .                                                   |
| .              | .                                                   |
| 16,520         | 4097 (last line of file)                            |

Example of a file containing ramp data for a 12-bit MSBjustified output:

Example code for a MATLAB routine write data to file:

function success=HSDCEP\_File (filename,data,datawidth)

- %   Function  to  write  data  file  for  loading  into  HSDCEP using command
- % line programs.
- % Input:
- %   Filename: Name of file to be written.
- %   data: Data vector to be written.
- %     datawidth: Width of the data vector. This is used to MSB justify the
- %   data for proper format from the FPGA/DUT interface % Output:
- %   Function returns a 1 if the datafile was properly written. %

```
success=0; fid=fopen(filename,'w'); dataLen=length(data); if (mod(dataLen,256) == 0) if (fid ~= -1) % Success in opening file fprintf(fid,'%d\r\n',length(data)); % Shift for MSB justification fprintf(fid,'%d\r\n',data*2^(16-datawidth)); fclose(fid); success=1; else disp(['Can not open output file: ' filename]); end else disp(['Data length must be a multiple of 256']); end
```

## High-Speed Data Converter Evaluation Platform (HSDCEP) User Guide Evaluates: RF-DACs ( &gt; 1.5Gsps) and DUCs

## Ordering Information

| PART   | TEMP RAnGE   | PIn-PACKAGE   |
|--------|--------------|---------------|
| HSDCEP | 0°C to +35°C | BOARD         |

## High-Speed Data Converter Evaluation

## Platform (HSDCEP) User Guide

## Evaluates: RF-DACs (

&gt; 1.5Gsps) and DUCs

## Revision History

|   REVISIOn nUMBER | REVISIOn DATE   | DESCRIPTIOn     | PAGES ChAnGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/12           | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.