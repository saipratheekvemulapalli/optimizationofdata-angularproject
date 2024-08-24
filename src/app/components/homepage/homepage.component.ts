import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { ImageServiceService } from 'src/app/services/image-service.service';

class ImageSnippet {
  public status: any;
  public pending: string;
  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  imageUploadForm: FormGroup;

  percentDone: number;
  uploadSuccess: boolean;
  size:any;
  width:number;
  height:number;
  aco2:any;
  dco2:any;
  comp:any;

  @ViewChild('coverFilesInput') imgType:ElementRef;

  constructor(private formBuilder: FormBuilder, private ng2ImgMax: Ng2ImgMaxService) {
    this.imageUploadForm = this.formBuilder.group({
      fileInput: ''
    });
  }
  

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const percentageReduction = 0.95;
      const targetFileSize = file.size * (1 - percentageReduction);
      const maxSizeInMB = targetFileSize * 0.000001;
      this.compressImage(file, maxSizeInMB);
    }
  }
  compressImage(file: File, maxSizeInMB: number) {  
    this.ng2ImgMax.compressImage(file, maxSizeInMB)
      .subscribe(compressedImage => {
        // Do whatever you want to do with the compressed file, like send to server.
        this.comp =(compressedImage.size* 0.000001).toFixed(2);
        console.log(compressedImage.size* 0.000001);
        console.log(file.size* 0.000001);
        alert("compressed and file reduced by 30-40% approx.....");
        console.log("size reduced");

        const red_size =file.size - compressedImage.size;
        this.dco2=(0.02*red_size*475/1024/1024).toFixed(2);
      }, error => {
        console.log(error.reason);
     });
  }

  version = VERSION

  onChange(evt:any){
    const file: File = evt.target.files[0];
    if (file) {
      const percentageReduction = 0.40;
      const targetFileSize = file.size * (1 - percentageReduction);
      const maxSizeInMB = targetFileSize * 0.000001;
      this.compressImage(file, maxSizeInMB);
    }
   this.percentDone = 100;
   this.uploadSuccess = true;
   let image:any = evt.target.files[0];
   this.size = (image.size/1024/1024).toFixed(2); //to change in mb divide by 1024
   this.aco2=(0.02*this.size*475).toFixed(2);
   

   this.width = image.width;
   let fr = new FileReader();
   fr.onload = () => { // when file has loaded
    var img = new Image();

    img.onload = () => {
        this.width = img.width;
        this.height = img.height;
    };

    //img.src = fr.result; // This is the data URL 
   };

  //fr.readAsDataURL(image);
  // this.imgType.nativeElement.value = "";
  }  


  // selectedFile: ImageSnippet;

  // constructor(private imageService: ImageServiceService){}

  // processFile(imageInput: any) {
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener('load', (event: any) => {

  //     this.selectedFile = new ImageSnippet(event.target.result, file);

  //     this.imageService.uploadImage(this.selectedFile.file).subscribe(
  //       (res) => {
        
  //       },
  //       (err) => {
        
  //       })
  //   });

  //   reader.readAsDataURL(file);
  // }

}
